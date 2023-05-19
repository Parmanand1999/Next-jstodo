"use client"
import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import Link from 'next/link';

const SignUpForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (data.name.length < 5 && data.email.includes("@") && data.password.length < 5 && data.confirmPassword.length < 5 & data.password === data.confirmPassword) {

        }
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={(e) => (e.preventDefault())}>
                <Box><h1>Create account</h1></Box>
                <TextField
                    label=" Full Name "
                    variant="outlined"
                    value={data.name}
                    onChange={(e) => setData(p => ({ ...p, name: e.target.value }))}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label=" Enter Your Email"
                    variant="outlined"
                    type='email'
                    value={data.email}
                    onChange={(e) => setData(p => ({ ...p, email: e.target.value }))}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label=" Enter Password"
                    variant="outlined"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData(p => ({ ...p, password: e.target.value }))}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label=" Enter confirm  Password"
                    variant="outlined"
                    type="password"
                    value={data.confirmPassword}
                    onChange={(e) => setData(p => ({ ...p, confirmPassword: e.target.value }))}
                    fullWidth
                    margin="normal"
                    required
                />

                <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth >
                    Register
                </Button>
                <Box sx={{ margin: 2 }}><p>Have already an account?{" "}
                    <Link href="/">Login here</Link > </p></Box>
            </form>


        </Container>

    );
};

export default SignUpForm;
