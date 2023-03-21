import React, { useState } from 'react'
import {
    Box,
    TextField,
    Typography,
    Button,
    FormGroup,
    FormControl,
    FormControlLabel,
    Checkbox,
    InputLabel,
    MenuItem,
    Select
} from '@mui/material'

function Forms() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age: 0
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
                        <FormControlLabel
                            control={<Checkbox onChange={() => setInputs((prev) => ({
                                ...prev,
                                subscribe: !inputs.subscribe

                            }))} />}
                            label="Subscribe to Newsletter" />
                    </FormGroup>

                    <FormControl>
                        <InputLabel>Age</InputLabel>
                        <Select name="age" value={inputs.age} label="Age" onChange={handleChange}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{ marginTop: 3 }} variant="contained" type="submit">Submit</Button>

                </form>
            </Box>

        </>
    )
}

export default Forms