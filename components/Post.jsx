import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="first post">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Wahaj Rana"
        subheader="March, 25, 2023"
      />
      <CardMedia
        component="img"
        image="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height="250"
      />
      <CardContent>
        <Typography variant="body">
          This is the discription of this beautiful image found on Pexels
          website. i personaly love these kinds of beautiful nature images which
          have calm and peace.
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorite">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Post;

// TODO: Struggling with Dark Mode of this component