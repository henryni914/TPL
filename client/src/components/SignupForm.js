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

export default function SignupForm() {

    let username = useRef(null);
    let email = useRef(null);
    let password = useRef(null);
    const [submitting, setSubmitting] = useState(false)


    function handleSubmit() {
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 1000)
        console.log(username.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
    }

    return (
        <Container py={{ base: 4 }}>
            <Heading as="h4" size="md">Sign Up Form</Heading>
            <FormControl id="email" isRequired >
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={email} placeholder="example@domain.com" />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Username</FormLabel>
                <Input type="username" ref={username} />
                <FormHelperText>Please enter a username.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={password} />
                <FormHelperText>Please enter a password.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>
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