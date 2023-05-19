"use client"
import { Box, Button, Container } from '@mui/material'
import { Link } from '@mui/material'

function Navbar() {
    return (
        <>

            <Box sx={{
                background: "#004498",
                color: 'white',
                height: 100,
                display: 'flex',
                justifyContent: 'space-between',

            }}>
                <Box sx={{
                    ml: 5,
                    fontSize: "2rem",
                    mt: 3
                }}>TASK</Box>
                <Box sx={{
                    mr: 5,

                    mt: 4,
                    color: 'white',
                }} >
                    <Link href="/" >
                        <Button sx={{
                            borderBottom: 0,

                            background: "white"
                        }} >Logout</Button>

                    </Link>
                </Box>
            </Box>


        </>
    )
}

export default Navbar