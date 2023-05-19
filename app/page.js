"use client"
import { Button, Container, TextField, Box } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handelSubmit = async () => {
    console.log(data);
    try {
      const response = await axios.post("https://todo-api-xu4f.onrender.com/user/login", data)
      console.log(response, "response")

      localStorage.setItem("token", response.data.access_token)
      if (localStorage.getItem("token")) {
        router.push("/todotask")
      }
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message, "message")

      alert("Invalid Email or password")
    }

  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={(e) => e.preventDefault()}>
        <Box><h1>Login Here</h1></Box>
        <TextField
          label=" Enter Your Email"
          variant="outlined"
          value={data.email}
          onChange={(e) => setData(p => ({ ...p, email: e.target.value }))}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label=" Enter Your Password"
          variant="outlined"
          type="password"
          value={data.password}
          onChange={(e) => setData(p => ({ ...p, password: e.target.value }))}
          fullWidth
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" fullWidth>
          <Link href="#" onClick={handelSubmit}>Login</Link>
        </Button>
        <Link href="signup">Create account</Link>
      </form>
    </Container>
  )
}
