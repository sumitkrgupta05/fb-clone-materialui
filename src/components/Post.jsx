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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ypP-pyMxa1mlnlcmKMqDWln8Jg54m5BGEA&usqp=CAU"
              alt=""
              width={36}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Virat Kholi"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="380"
        src="https://www.lacademie.com/wp-content/uploads/2022/01/the-delicious-foods-of-italian-cuisine.jpg"
        alt="South dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Understanding Italian cuisine is relatively easy with most culinary
          experts agreeing that Italian cooking is mainly about simplicity;
          simple recipes, quality ingredients, cooking techniques and passion.
          However ingredients and technique are some of the two most important
          components of Italian cooking.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
