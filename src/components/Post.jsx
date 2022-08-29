import React from 'react'
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
  import ShareIcon from "@mui/icons-material/Share";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import Favorite from "@mui/icons-material/Favorite";
  import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
function Post() {
  return (
    <Box>
     <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Sara"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1660376745562-cf3c466d8bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{ color: "red" }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card> 
    </Box>
  )
}

export default Post

