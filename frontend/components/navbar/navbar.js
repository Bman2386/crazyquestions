import React from 'react';
import {Link} from 'react-router-dom';
// import { logout } from '../../actions/session';

const Navbar = ({current, data}) => {
    console.log(data)
    return (
        <div>Navbar
            {current ? <button onClick={()=>logout()}>Logout</button> : <Link to='/login'>Sign In</Link>}
        </div>
    )
}

export default Navbar