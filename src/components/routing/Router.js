import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Game from './../pages/Game';
import Waiting from '../pages/Waiting';
import EndGame from './../pages/EndGame';
function Router() {
    return (
        <Switch>
            <PrivateRoute exact path='/game' component={Game} />
            <PrivateRoute exact path='/' component={Waiting} />
            <PrivateRoute exact path='/endgame' component={EndGame} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
