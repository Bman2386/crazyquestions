import { connect } from 'react-redux';
import Login from './login';
import { createNewUser, login } from '../../actions/session';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({
    create: user => dispatch(createNewUser(user)),
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);