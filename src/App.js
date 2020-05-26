import React from 'react';

import { Route } from 'react-router-dom';

import Settings from './components/Settings/Settings';
import Routes from './components/Routes/Routes';

const App = () => {  
    return (
        <Route render = { ({ location }) => (
            <React.Fragment>
                <Settings />
                <Routes />
            </React.Fragment>
        )} />
    );
};

export default App;
