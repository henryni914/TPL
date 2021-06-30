import React, { useRef, useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Container,
    Heading,
    Button,
} from "@chakra-ui/react"
import { useHistory } from 'react-router';
import API from '../utils/API';
import { setUser, setUserLogin } from '../actions/user';
import { useDispatch} from "react-redux";

export default function SignupForm() {

    let usernameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);
    let history = useHistory();
    const dispatch = useDispatch();
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState('');



    function handleSubmit() {
        setSubmitting(true)
        // check if all fields are valid
        // if all valid, search DB by username 
        // if something is found, alert user account already exists with either username or email
        // if nothing found
        let userInfo = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const emailTest = regex.test(userInfo.email)
        // console.log(emailTest)
        if (emailTest) {
            console.log('valid email')
            // first search db if any user returns from the email or username
            // if no results, create user
            // if results, return error that username or email exists

            API.createUser(userInfo).then(res => {
                console.log(res)
                if (res.data.constraint) {
                    if (res.data.constraint === "users_username_key") {
                        setFormError('Username already exists')
                    } else {
                        setFormError('Email already exists')
                    }

                } else {
                    // setUser in Redux
                    dispatch(setUser(res.data));
                    dispatch(setUserLogin());
                    // redirect if no error to dashboard
                    history.push('/dashboard')
                }
                setSubmitting(false)
            })
        } else {
            setFormError('Invalid e-mail')
            setSubmitting(false)
        }
    }

    return (
        <Container py={{ base: 4 }}>
            <Heading as="h4" size="md">Create Account</Heading>
            <FormControl py={{ base: 4 }} isRequired >
                <FormLabel>Email address</FormLabel>
                <Input type="email" id="email" ref={emailRef} placeholder="example@domain.com" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Username</FormLabel>
                <Input type="username" id="username" ref={usernameRef} />
                <FormHelperText>Please enter a username.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" id="password" ref={passwordRef} />
                <FormHelperText>Please enter a password.</FormHelperText>
                <div>{formError}</div>
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    onClick={() => handleSubmit()}
                    isLoading={submitting}
                >
                    Submit
                </Button>
            </FormControl>
        </Container>
    )
}