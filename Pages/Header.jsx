import React, { useState } from 'react'
import { AppBar, Toolbar, Menu, MenuItem, Typography, Button } from '@mui/material'

function Header() {
    const [anchorElm, setAnchorElm] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false)
    }
    
    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true)
    }

    return (
        <>
            <AppBar variant="elevation">
                <Toolbar >
                    <Typography variant='h5'>hxnCodes</Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClick}
                        sx={{ marginLeft: 'auto' }}
                    >Menu</Button>
                    <Menu
                        anchorEl={anchorElm}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Balance</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>


        </>
    )
}

export default Header