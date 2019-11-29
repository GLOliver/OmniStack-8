import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" componente={Login} />
            <Route path="/main" componente={Main} />
        </BrowserRouter>
    );
}