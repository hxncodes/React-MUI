import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const friends = [
  {
    id: 0,
    name: "Maheen",
    img: "/images/girl1.png",
  },
  {
    id: 1,
    name: "Azmat Ullah",
    img: "/images/boy1.png",
  },
  {
    id: 2,
    name: "Sadaf",
    img: "/images/girl2.png",
  },
  {
    id: 3,
    name: "Wajid",
    img: "/images/boy2.png",
  },
  {
    id: 4,
    name: "Kanwal",
    img: "/images/girl3.png",
  },
  {
    id: 5,
    name: "Alizee",
    img: "/images/girl4.png",
  },
  {
    id: 6,
    name: "Mehreen",
    img: "/images/girl5.png",
  },
];
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" sx={{ fontWeight: 100 }}>
          Online Friends
        </Typography>
        <AvatarGroup max="7">
          {friends.map((friend) => (
            <Avatar alt={friend.name} src={friend.img} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
