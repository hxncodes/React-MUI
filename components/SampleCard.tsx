import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'

const SampleCard = () => {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="../src/assets/hxnCodes.jpg"
                    alt="hxn profile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">hxnCodes</Typography>
                    <Typography variant="body2" color="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio vero consequuntur provident sequi exercitationem. Vel nisi aliquid odio. Est quas magnam id ea dolorem facilis minus reprehenderit eligendi ex!</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Save</Button>
            </CardActions>
        </Card>
    )
}

export default SampleCard