import React from "react";



import s from './authorization.module.css'

const Authorization = () => {


    return (
        <div>
            <span>Login</span>
            <input type="text" value=''/>
            <span>Password</span>
            <input type="password" value=''/>
            <button >Sign in</button>
        </div>
    )
}

export default Authorization;