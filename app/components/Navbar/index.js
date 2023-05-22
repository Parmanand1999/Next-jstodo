"use client"
import { Box, Button, Container } from '@mui/material'
import { Link } from '@mui/material'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router=useRouter()
    const loghandler = ()=>{
        localStorage.removeItem("token")
        if (!localStorage.getItem) {
            router("/")
        }
    }
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
                        }}
                            onClick={loghandler}
                        >Logout</Button>

                    </Link>
                </Box>
            </Box>


        </>
    )
}

export default Navbar