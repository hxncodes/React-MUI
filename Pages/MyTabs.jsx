import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'

function MyTabs() {

    const [value, setValue] = useState();

    return (
        <AppBar>
            <Toolbar>
                <Tabs
                    value={value}
                    onChange={(e, val) => setValue(val)}
                    textColor='inherit'
                >
                    <Tab label="First Tab" />
                    <Tab label="Second Tab" />
                    <Tab label="Third Tab" />
                </Tabs>
            </Toolbar>
        </AppBar >
    )
}

export default MyTabs