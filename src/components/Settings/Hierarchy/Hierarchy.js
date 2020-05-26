import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import classes from './Hierarchy.module.css';

const Hierarchy = ({ pages, selectedPage, selectedComponent, addPage, removePage, addComponent, selectPage, selectComponent }) => {
    const [reveal, setReveal] = useState(true);
    const history = useHistory();

    const selectPageHandler = (pageIndex) => {
        history.push(selectedPage !== pageIndex ? pages[pageIndex].url : '/');

        selectPage(selectedPage !== pageIndex ? pageIndex : null);
        selectComponent(null);
    };

    const selectComponentHandler = (componentIndex) => {
        selectComponent(selectedComponent !== componentIndex ? componentIndex : null);
    };

    return (
        <div className = { [classes.Hierarchy, reveal ? classes.Reveal : ''].join(' ') }>
            <button className = { classes.Button } onClick = { () => setReveal(!reveal) }>
                <div className = { classes.Icon } />
            </button>

            <div className = { classes.Main }>
                { pages.map((page, pageIndex) => 
                    <div className = { [classes.Page, selectedPage === pageIndex ? classes.ActivePage : ''].join(' ') } key = { page.name }>
                        <div className = { classes.Wrapper } onClick = { () => selectPageHandler(pageIndex) }>
                            <p className = { classes.Name }>{ page.name }</p>
                            <div className = { classes.Expand } />
                        </div>

                        <div className = { classes.Components }>
                            { page.content.map((component, componentIndex) =>
                                <div className = { [classes.Component, selectedComponent === componentIndex ? classes.ActiveComponent : ''].join(' ') } onClick = { () => selectComponentHandler(componentIndex) } key = { componentIndex }>
                                    <p className = { classes.Type }>{ component.type } </p>
                                </div>) }

                            <div className = { classes.Options }>
                                <button className = { classes.Add } onClick = { () => addComponent(true, null) }>Add component</button>
                                { pageIndex !== 0 && <button className = { classes.Remove } onClick = { () => removePage(pageIndex) }>Remove page</button> }
                            </div>
                        </div>
                    </div>) }
                    
                <button className = { classes.AddPage } onClick = { addPage }>Add Page</button>
            </div>
        </div>
    );
};

export default Hierarchy;
