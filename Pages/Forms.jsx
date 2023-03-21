import React, { useState } from 'react'
import { Box, TextField, Typography, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

function Forms() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false
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
            <Typography variant="h3" component="h1" color="secondary" sx={{ margin: 3 }}>Welcome to Forms</Typography>
            <Box component="div" sx={{ margin: 3 }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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

                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={() => setInputs((prev) => ({
                            ...prev,
                            subscribe: !inputs.subscribe

                        }))} />}
                            label="Subscribe to Newsletter" />
                    </FormGroup>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>

            </Box>

        </>
    )
}

export default Forms