import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Game from './../pages/Game';
import Result from './../pages/Result';
import JoinGame from './../pages/JoinGame';
import Waiting from './../pages/Waiting';
function Router() {
    return (
        <Switch>
            <PrivateRoute exact path='/game' component={Game} />
            <PrivateRoute exact path='/' component={JoinGame} />
            <PrivateRoute exact path='/waiting' component={Waiting} />
            <PrivateRoute exact path='/result' component={Result} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
