import React from "react";



import s from './registration.module.css'

const Registration = () => {


    return (
        <div>
            <span>Name</span>
            <input type="text" value=''/>

            <span>Surname</span>
            <input type="text" value=''/>

            <span>Email</span>
            <input type="email" value=''/>

            <span>Number</span>
            <input type="tel" value=''/>

            <span>Login</span>
            <input type="text" value=''/>

            <span>Img</span>
            <input type="text" value=''/>

            <span>Password</span>
            <input type="password" value=''/>

            <button >Sign up</button>
        </div>
    )
}

export default Registration;