"use client"
import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const SignUpForm = () => {
    const router = useRouter();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: ""

    });
const [alldata,setAlldata]=useState([])
    const handleSubmit = async () => {
        if (data.firstName.length > 1 && data.lastName.length > 1 && data.email.includes("@") && data.password.length > 1 && data.confirm_password.length > 1 && data.password === data.confirm_password) {
            try {
                const response = await axios.post("https://todo-api-xu4f.onrender.com/user/register", data);
                console.log(response.data, "response");
                alert(response.data.message);
                router.push('/');
            } catch (error) {

                console.log(error.response.data);
                if (error.response.data.message==="This email already exists") {
                    alert(error.response.data.message)
                   
                } else {
                    console.error(error);
                    alert("Something went wrong");
                }

            }
        } else {


            alert("Something went wrong");

        }
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={(e) => (e.preventDefault())}>
                <Box><h1>Create account</h1></Box>
                <TextField
                    label=" Full Name "
                    variant="outlined"
                    value={data.firstName}
                    onChange={(e) => setData(p => ({ ...p, firstName: e.target.value }))}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label=" Last Name "
                    variant="outlined"
                    value={data.lastName}
                    onChange={(e) => setData(p => ({ ...p, lastName: e.target.value }))}
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
                    value={data.confirm_password}
                    onChange={(e) => setData(p => ({ ...p, confirm_password: e.target.value }))}
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
