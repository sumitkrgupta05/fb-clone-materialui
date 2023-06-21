import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://picsum.photos/200/300?grayscale"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://picsum.photos/200/300/?blur"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://picsum.photos/600/300.jpg"
          />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300.jpg" />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://picsum.photos/200/300/?grayscale"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://picsum.photos/600/300?blur"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={3} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: "100", height: "100" }}
          cols={3}
          rowHeight={100}
          gap={5}
        >
          <ImageListItem>
            <img
              alt="Remy Sharp"
              src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Cindy Baker"
              src="https://picsum.photos/100/70?grayscale"
            />
          </ImageListItem>
          <ImageListItem>
            <img alt="Cindy Baker" src="https://picsum.photos/100/70?animal" />
          </ImageListItem>
          <ImageListItem>
            <img alt="Cindy Baker" src="https://picsum.photos/100/70?cow" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={3}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
