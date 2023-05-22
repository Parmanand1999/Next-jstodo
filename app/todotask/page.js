"use client"
import React, { useEffect, useState } from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import Navbar from '../components/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';



const TodoTask = () => {
    const [task, setTask] = useState({
        title: "",
        description: ""
    })
    const [data, setData] = useState([])
    const token = localStorage.getItem("token")


    async function addtask() {
        // const updtate = [...data, task]
        // setData(updtate)
        setTask({
            title: "",
            description: ""
        })
        try {
            const response = await axios.post("https://todo-api-xu4f.onrender.com/user/addTodo", task, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(response, "responcetodo")
            alert(response.data.message)


        } catch (error) {
            console.log(error)
        }

        try {
            const responsealltodo = await axios.get("https://todo-api-xu4f.onrender.com/user/all-todo", {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(responsealltodo.data.AllTodo, "responcealltodo")
            setData(responsealltodo.data.AllTodo)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        try {
            const responsealltodo = axios.get("https://todo-api-xu4f.onrender.com/user/all-todo", {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(responsealltodo.data.AllTodo, "responcealltodo")
            setData(responsealltodo.data.AllTodo)

        } catch (error) {
            console.log(error)
        }
    }, [token])


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
                    value={task.title}
                    onChange={(e) => setTask(p => ({ ...p, title: e.target.value }))}
                    label=" Enter Task here"
                    size="small"
                />
                <TextField
                    label="Write Your thoughts here "
                    variant="outlined"
                    type="text"
                    fullWidth
                    onChange={(e) => setTask(p => ({ ...p, description: e.target.value }))}
                    value={task.description}
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
                                <TableCell component="th" scope="row">{item.title} </TableCell>
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

export default TodoTask