import React, { useRef, useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Container,
    Heading,
    Button,
} from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
import API from '../utils/API';
import { setUser, setUserLogin } from '../actions/user';
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {

    let usernameRef = useRef(null);
    let passwordRef = useRef(null);
    let history = useHistory();

    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState('');
    const dispatch = useDispatch();

    function handleSubmit() {
        setSubmitting(true)
        // setTimeout(() => {
        //     setSubmitting(false)
        // }, 1000)
        let userInfo = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        API.findUser(userInfo).then(res => {
            // console.log(res)
            if (res.data === false) {
                setLoginError('Invalid username');
            } else if (res.data === 'invalid password') {
                setLoginError('Invalid password')
            } else {
                // setUser in Redux state
                dispatch(setUser(res.data), setUserLogin());
                // redirect to dashboard
                history.push('/dashboard');
            }
            setSubmitting(false)
        })
    }

    return (
        <Container py={{ base: 4 }}>
            <Heading as="h4" size="md">Login</Heading>
            <FormControl py={{ base: 4 }} isRequired >
                <FormLabel>Username</FormLabel>
                <Input type="username" id="username" ref={usernameRef} />
                <FormHelperText>Please enter your username.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" id="password" ref={passwordRef} />
                <FormHelperText>Please enter your password.</FormHelperText>
                <p>{loginError}</p>
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