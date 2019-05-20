import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registr } from './pages/Registr';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/login" exact component={ Login } />
                <Route path="/login?error" exact component={ Login } />
                <Route path="/registration" exact component={ Registr } />
            </Switch>
        </BrowserRouter>
    )
}

export default App;