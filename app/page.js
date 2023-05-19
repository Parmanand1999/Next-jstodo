"use client"
import { Button, Container, TextField, Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  return (
    <Container maxWidth="sm">
      <form onSubmit={(e) => (e.preventDefault())}>
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
         <Link href="/todotask">Login</Link> 
        </Button>
        <Link href="signup">Create account</Link>
      </form>
    </Container>
  )
}
