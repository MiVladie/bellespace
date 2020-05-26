import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { useStore } from '../../hooks-store/store';

import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';
import Interstitial from '../Interstitial/Interstitial';

const Routes = () => {
    const pages = useStore()[0].pages;
    const styles = useStore()[0].styles

    const dispatch = useStore()[1];

    const renderPage = (index) => {
        return pages[index].content.map((component, id) => {
            let comp;

            const allAttributes = JSON.parse(`{
                ${ pages[index].content[id].content.map(prop => `
                    "${ prop.attribute }": "${ prop.value }"`)  }
                }`);
            
            const allStyles = JSON.parse(`{
                ${ styles[component.type].map(element => `
                    "${ element.name }": {
                        ${ element.options.map(key => `"${ key.attribute }": "${ key.value }"`) }
                    }`) }
                }`);

            switch (component.type) {
                case 'Banner':
                    comp = <Banner { ...allAttributes } styles = { allStyles } key = { id } />;
                    break;

                case 'Introduction':
                    comp = <Introduction { ...allAttributes } styles = { allStyles } key = { id } />;
                    break;
                    
                case 'Interstitial':
                    comp = <Interstitial { ...allAttributes } styles = { allStyles } key = { id } />;
                    break;

                default:
                    break;
            }
            
            return comp;
        })
    };

    return (
        <Switch>
            { pages.map((page, index) => <Route path = { page.url } exact render = { () => renderPage(index) } key = { page.url } />) }
            <Route render = { () => <p>Not Found!</p> } />
        </Switch>
    );
}

export default Routes;
