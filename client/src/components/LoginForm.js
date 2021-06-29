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
import API from '../utils/API';

export default function LoginForm() {

    let usernameRef = useRef(null);
    let passwordRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState('');


    function handleSubmit() {
        // setSubmitting(true)
        // setTimeout(() => {
        //     setSubmitting(false)
        // }, 1000)
        let userInfo = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        API.findUser(userInfo).then(res => {
            console.log(res)
            if(res.data.length === 0){
                setLoginError('Invalid username or password')
            } else {
                // setUser in Redux state
                // redirect to dashboard
            }
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