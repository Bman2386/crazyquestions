import React from 'react';  
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
//make home, navbar, game, and game-boards
export default () => {
    return (
        <div>
            {/* <Route path="/" component={NavBarContainer} /> */}
            {/* <Route exact path="/" component={Home} /> */}
        </div>
    )
};