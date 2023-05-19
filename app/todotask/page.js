"use client"
import { Box, Button, Container, TextField } from '@mui/material'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AiOutlineDelete } from 'react-icons/ai';



function todotask() {
    const [taskdata, setTaskdata] = useState({
        task: "",
        description: ""
    })
    const [data, setData] = useState([])


    function addtask() {
        const updtate = [...data, taskdata]
        setData(updtate)
        setTaskdata({
            task: "",
            description: ""
        })
    }
    const removeitem = (i) => {
        const newList = data.filter((item, id) => id !== i);
        setData(newList)
        console.log(i, "id");
        // console.log(newList, "update");

    }

    return (
        <>
            <Navbar />
            <Container maxWidth="md">
                <TextField
                    fullWidth
                    margin="normal"
                    type='text'
                    value={taskdata.task}
                    onChange={(e) => setTaskdata(p => ({ ...p, task: e.target.value }))}
                    label=" Enter Task here"
                    size="small"
                />
                <TextField
                    label="Write Your thoughts here "
                    variant="outlined"
                    type="text"
                    fullWidth
                    onChange={(e) => setTaskdata(p => ({ ...p, description: e.target.value }))}
                    value={taskdata.description}
                    margin="normal"
                    multiline
                    rows={3}
                    required
                />
                <Box sx={{
                    background: "#004498",
                    color: 'white',
                    display: "flex"


                }}>
                    <Button sx={{
                        color: 'white',
                        ml: "40%",
                    }}
                        onClick={addtask}
                    >ADD TASK</Button>
                </Box>
            </Container>
            <TableContainer>
                <Table
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell align="center" >Description</TableCell>

                            <TableCell align="right">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, id) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.task} </TableCell>
                                <TableCell align="center">{item.description}</TableCell>

                                <TableCell align="right" >{<AiOutlineDelete color="red" onClick={() => removeitem(id)} />}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default todotask