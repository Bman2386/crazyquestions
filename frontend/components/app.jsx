import React from 'react';  
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import navBarContainer from './navbar/navbarContainer';
import homeContainer from './home/homeContainer';
import profileContainer from './profile/profileContainer';
import gameContainer from './game/gameContainer';
import loginContainer from './session/loginContainer';
// make login
export default () => {
    return (
        <div>
            <Route path="/" component={navBarContainer} />
            <Route exact path="/" component={homeContainer} />
            <AuthRoute path='/login' component={loginContainer} />
            <ProtectedRoute path='/profile' component={profileContainer} />
            <ProtectedRoute path='/game' component={gameContainer} />
        </div>
    )
};