import React from 'react'
import { Typography } from '@mui/material'

function Typo() {
    return (
        <>
            <Typography variant="h3" component="h1" color="primary">Welcome to MUI Typography</Typography>
            <Typography variant="h1" color="secondary" sx={{ color: '#dd0531' }}>Heading 1</Typography>
            <Typography variant="h2" color="secondary">Heading 2</Typography>
            <Typography variant="h3" color="secondary">Heading 3</Typography>
            <Typography variant="h4" color="secondary">Heading 4</Typography>
            <Typography variant="h5" color="secondary">Heading 5</Typography>
            <Typography variant="h6" color="secondary">Heading 6</Typography>
            <Typography variant="body1" color="secondary">Body 1</Typography>
            <Typography variant="body2" color="secondary">Body 1</Typography>
            <Typography variant="button" color="secondary">Button Text</Typography>
            <Typography variant="caption" color="secondary">Caption Text</Typography>

        </>
    )
}

export default Typo