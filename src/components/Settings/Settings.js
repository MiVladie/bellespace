import React, { useState } from 'react';

import Hierarchy from './Hierarchy/Hierarchy';
import Inspector from './Inspector/Inspector';
import ModalComponent from './ModalComponent/ModalComponent';

import { useStore } from '../../hooks-store/store';

const Settings = () => {
    const [selectedPage, setSelectedPage] = useState();
    const [selectedComponent, setSelectedComponent] = useState();
    const [selectingComponent, setSelectingComponent] = useState(false);
    
    const pages = useStore()[0].pages;
    const styles = useStore()[0].styles;

    const dispatch = useStore()[1];

    const addPageHandler = () => {
        let pgs = 0;

        for(let page of pages) 
            if(page.name.includes('New Page'))
                pgs++;

        let newPage = {
            name: 'New Page' + (pgs !== 0 ? (' ' + pgs) : ''),
            url: '/',
            content: []
        };

        setSelectedComponent(null);
        setSelectedPage(pages.length);
        dispatch('MODIFY_PAGE', { pages: pages.concat([newPage]) });
    };

    const removePageHandler = (pageIndex) => {
        setSelectedComponent(null);
        setSelectedPage(null);

        let pgs = [ ...pages ];
        pgs.splice(pageIndex, 1);

        dispatch('REMOVE_PAGE', { pages: pgs });
    };

    const addComponentHandler = (state, newComponent) => {
        setSelectingComponent(state);

        if(newComponent != null) {
            let pgs = [ ...pages ];
            pgs[selectedPage].content.push(newComponent);

            dispatch('MODIFY_PAGE', { pages: pgs });
            setSelectedComponent(pgs[selectedPage].content.length - 1);
        }
    };

    const changePageHandler = (fieldName, value) => {
        let pgs = [ ...pages ];
        pgs[selectedPage][fieldName] = fieldName === 'url' ? '/' + value.substr(1) : value;

        dispatch('MODIFY_PAGE', { pages: pgs });
    };

    const changeContentHandler = (fieldIndex, value) => {        
        let pgs = JSON.parse(JSON.stringify(pages));        
        pgs[selectedPage].content[selectedComponent].content[fieldIndex].value = value;

        dispatch('MODIFY_PAGE', { pages: pgs });
    };

    const changeStyleHandler = (styleIndex, selectedStyle, value) => {
        let stl = { ...styles };
        stl[pages[selectedPage].content[selectedComponent].type][selectedStyle].options[styleIndex].value = value;
        
        dispatch('MODIFY_STYLES', { styles: stl });
    };

    return (
        <React.Fragment>
            <Hierarchy
                pages = { pages } 

                selectedPage = { selectedPage }
                selectedComponent = { selectedComponent }

                addPage = { addPageHandler }
                removePage = { removePageHandler }
                addComponent = { addComponentHandler }
                selectPage = { setSelectedPage }
                selectComponent = { setSelectedComponent } />

            <Inspector
                pages = { pages }
                styles = { styles }

                selectedPage = { selectedPage }
                selectedComponent = { selectedComponent }

                changePage = { changePageHandler }
                changeContent = { changeContentHandler }
                changeStyle = { changeStyleHandler } />

            { selectingComponent &&
                <ModalComponent
                    addComponent = { addComponentHandler } /> }
        </React.Fragment>
    );
};

export default Settings;
