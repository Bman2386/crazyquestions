import React, {useState} from 'react';

const Login = ({create, login}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [changeForm, setChangeForm] = useState(false);


    const createAccount = () => {
       
        const newUser = {
            username: userName,
            password: password
        }
        // fix backend
        create(newUser)
    }

    const loginUser = () => {
        const newUser = {
            userName: userName,
            password: password
        }
        login(newUser)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input 
            type='text'
            placeholder='User Name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <input 
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {changeForm ? <button onClick={() => loginUser()}>Login</button> : 
            <div>
            <input
            type='text'
            placeholder='Confirm Password'
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            />
            <button onClick={() => createAccount()}>Create Account</button>
            <button onClick={() => setChangeForm(true)}>Already Have an Account?</button>    
            </div>}

        </div>
    );
};

export default Login
//still needs error handling and testing