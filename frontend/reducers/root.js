import { combineReducers } from 'redux';
import sessionReducer from './session';
import session_errors from './session_errors_reducer';
// import entitiesReducer from './entities';

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
    errors: session_errors
}); 