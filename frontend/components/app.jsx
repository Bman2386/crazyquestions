import React from 'react';  
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import navBarContainer from './navbar/navbarContainer';
// import NavBar from './navbar/navbar'
import homeContainer from './home/homeContainer';
import profileContainer from './profile/profileContainer';
import gameContainer from './game/gameContainer';
import loginContainer from './session/loginContainer';


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