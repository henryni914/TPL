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

export default function LoginForm() {

    let username = useRef(null);
    let password = useRef(null);
    const [submitting, setSubmitting] = useState(false)


    function handleSubmit() {
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 1000)
        console.log(username.current.value)
        console.log(password.current.value)
    }

    return (
        <Container py={{ base: 4 }}>
            <Heading as="h4" size="md">Login</Heading>
            <FormControl py={{ base: 4 }} isRequired >
                <FormLabel>Username</FormLabel>
                <Input type="username" id="username" ref={username} />
                <FormHelperText>Please enter your username.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type="password" id="password" ref={password} />
                <FormHelperText>Please enter your password.</FormHelperText>
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