import React from 'react'
import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const MyList = () => {

    const items = ["First", "Second", "Third", "Fourth", "Fifth"]
    return (
        <Box>
            <List sx={{ width: 300 }}>

                {items.map((item) => (
                    <ListItem divider>
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}


            </List>
        </Box>
    )
}

export default MyList