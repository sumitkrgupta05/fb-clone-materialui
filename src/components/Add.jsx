import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddIcon from "@mui/icons-material/Add";
import { Stack, styled } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "25px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOwm6Ex6w5KYCl9ijZCdQ3tXInsu-Sxkbev9Srk1-5cIJMNkHlz8OiJ7Mxy3k5b8sYuc&usqp=CAU"
            />
            <Typography fontWeight={500} variant="span">
              Sumit
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Write something about your post..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
