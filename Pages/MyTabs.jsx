import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'

function MyTabs() {

    const [value, setValue] = useState();

    return (
        <div>
            <Tabs
                value={value}
                onChange={(e, val) => setValue(val)}
                indicatorColor='secondary'
                textColor='secondary'
            >
                <Tab label="First Tab" />
                <Tab label="Second Tab" />
                <Tab label="Third Tab" />
            </Tabs>
        </div >
    )
}

export default MyTabs