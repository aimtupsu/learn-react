import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SchoolDiary from "./pages/SchoolDiary";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/login" exact component={ Login } />
                <Route path="/registration" exact component={ Registration } />
                <Route path="/diary" exact component={ SchoolDiary } />
            </Switch>
        </BrowserRouter>
    )
}

export default App;