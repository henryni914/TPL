import React, { useRef } from 'react';

export default function SignupForm() {

    let username = useRef(null);
    let email = useRef(null);

    function handleSubmit() {
        console.log(username.current.value)
        console.log(email.current.value)
    }

    return (
        <>
            <h2>Sign up</h2>
            <h4>Username</h4>
            <input ref={username}></input>
            <h4>Email</h4>
            <input ref={email}></input>
            <br></br>
            <button onClick={() => handleSubmit()}>Test</button>
        </>
    )
}