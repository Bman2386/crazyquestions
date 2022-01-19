import { connect } from 'react-redux';
import NavBar from './navbar';
import {logout} from '../../actions/session'

const mapStateToProps = (state) => {
    const currentUser = window.currentUser ? window.currentUser : null
    const data = 'string of stuff'
    return {
        current: currentUser,
        stuff: data
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: logout
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);