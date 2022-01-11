import React, {useState} from 'react';

export const Login = ({create, login}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [changeForm, setChangeForm] = useState(false);


    const createAccount = () => {
        const newUser = {
            userName: userName,
            password: password
        }
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
            placeholder='User Name'
            value={userName}
            onChange={() => setUserName()}
            />
            <input 
            placeholder='Password'
            value={password}
            onChange={() => setPassword()}
            />
            {changeForm ? <button onClick={() => loginUser()}>Login</button> : 
            <div>
            <input
            placeholder='Confirm Password'
            value={confirm}
            onChange={() => setConfirm()}
            />
            <button onClick={() => createAccount()}>Create Account</button>
            <button onClick={() => setChangeForm(true)}>Already Have an Account?</button>    
            </div>}

        </div>
    );
};

//still needs error handling and testing