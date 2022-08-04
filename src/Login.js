import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email:user.email,
                photourl:user.photoURL
            }))
        })
    }
  return (
    <div className="login">
        <div className="loginContainer">
            <img className="mainLogo" src="https://pbs.twimg.com/media/EjotwoWXgAEUFxe.jpg:large" />

        </div>
            <Button onClick={signIn} size="large" className="login__button" variant="contained">Login</Button>
    </div>
  )
}

export default Login