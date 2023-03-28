import styled from "@emotion/styled";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";

// Custom Modal component
const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Custom Box component
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="New Post"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 20px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <Add />
        </Fab>
      </Tooltip>

      <MyModal open={open} onClose={() => setOpen(false)}>
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="/images/girl1.png" />
            <Typography fontWeight={500} variant="span">
              Maheen
            </Typography>
          </UserBox>
          <TextField
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  );
};

export default CreatePost;
