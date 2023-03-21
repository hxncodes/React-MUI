import React, { useState } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'

function Forms() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })


    // getting inputs from input fields
    const handleChange = (e) => {
        setInputs((preValue) => ({
            ...preValue,
            [e.target.name]: e.target.value
        }))
    }

    // submit button action
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }
    return (
        <>
            <Box component="div" sx={{ margin: 3 }}>
                <form onSubmit={handleSubmit}>
                    <Typography>Forms</Typography>
                    <TextField
                        name="name"
                        variant="outlined"
                        type={'text'}
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                    />

                    <TextField
                        name="email"
                        variant="outlined"
                        type={'email'}
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}
                    />

                    <TextField
                        name="password"
                        variant="outlined"
                        type={'password'}
                        placeholder='Password'
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    <br></br>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
                <Typography sx={{ margin: 3 }}>Welcome</Typography>
            </Box>

        </>
    )
}

export default Forms