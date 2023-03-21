import React from 'react'
import { Typography, Button, IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

function Btns() {
  return (
    <>
      <Typography variant="h3" component="h5" color="primary">Buttons</Typography>
      <Button variant="contained" color="primary">Contained Button</Button>
      <Button variant="text" color="secondary">Text Button</Button>
      <Button variant="outlined" color="secondary">Outlined Button</Button>
      <Button variant="contained" size="small" sx={{ margin: 3, backgroundColor: '#ff3d00', '&:hover': { backgroundColor: "#832561" } }} onClick={() => alert('I am small Button with sx props')}>Click Me</Button>
      <Button variant="contained" color="success" endIcon={<PhotoCamera />}>Button with Icon</Button>
      <IconButton color="secondary" component="span"><PhotoCamera /></IconButton>
      <Button variant="contained" disabled>Disabled Button</Button>

    </>
  )
}

export default Btns