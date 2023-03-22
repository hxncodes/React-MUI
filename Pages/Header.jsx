import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Header() {
    return (
        <>
            <AppBar variant="elevation">
                <Toolbar >
                    <Typography variant='h5'>hxnCodes</Typography>
                    <Button sx={{ marginLeft: 'auto' }} variant='contained' color="error">Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header