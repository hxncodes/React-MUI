import React, { useState } from 'react'
import { List, Box, ListItem, ListItemButton, Collapse, ListItemText } from '@mui/material'

const MyList = () => {

    const items = ["First", "Second", "Third", "Fourth", "Fifth"]
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <List sx={{ width: 300 }}>
                <ListItem divider>
                    <ListItemButton onClick={() => setOpen(true)}>
                        <ListItemText primary="Expand List" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open} >
                <List sx={{ width: 300, marginLeft: 15 }}>
                    {items.map((item) => (
                        <ListItem divider>
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}


                </List>
            </Collapse>
        </Box >
    )
}

export default MyList