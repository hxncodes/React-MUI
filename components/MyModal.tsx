import React, { useState } from 'react'
import { Modal, Box, Button, Typography } from '@mui/material'

const MyModal = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box position='absolute' top="50%" left="50%">
                    <Typography>this is a Modal component of MUI</Typography>
                    <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
                </Box>
            </Modal>
        </>
    )
}

export default MyModal