import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'

function Forms() {
    const [name, setName] = useState("")
    return (
        <>
            <Box component="div" sx={{ margin: 3 }}>
                <Typography>Forms</Typography>
                <TextField label="Outlined" variant="outlined" id="outlined-field" required type={'text'} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Filled" variant="filled" id="filled-field" type={'email'} placeholder='Email' />
                <TextField label="Standard" variant="standard" id="standard-field" type={'password'} placeholder='Password' />

                <Typography sx={{ margin: 3 }}>{name}</Typography>
            </Box>

        </>
    )
}

export default Forms