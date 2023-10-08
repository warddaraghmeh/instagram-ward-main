import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import image1 from "../img/fatima.jpeg";
import image2 from "../img/wardphoto.jpg";

const posts = [
  {
    id: 1,
    username: "sozan",
    caption:
      "Enjoying a peaceful evening by the beach, watching the sun set over the horizon. The colors are simply breathtaking. ️🤍",
    imageUrl: image1,
    userAvatar: image1,
  },
  {
    id: 2,
    username: "ward",
    caption:
      "Enjoying a peaceful evening by the beach, watching the sun set over the horizon. The colors are simply breathtaking. ️🤍",
    imageUrl: image2,
    userAvatar: image2,
  },
];

function Posts() {
  return (
    <Container maxWidth="md" style={{ marginTop: "16px" }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            width: "500px",
            maxWidth: "100%",
            margin: "10px auto",
            marginBottom: "40px",
            backgroundColor: "black",
          }}
        >
          <div style={{ display: "flex ", justifyContent: "space-between" }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="user"
                  src={post.userAvatar}
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    border: "2px solid #ff8500",
                  }}
                />
              }
              title={post.username}
              style={{ color: "#ffffff" }}
            />
            <IconButton aria-label="more-options">
              <MoreVertIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </div>

          <CardContent>
            <img
              src={post.imageUrl}
              alt={`Post by ${post.username}`}
              style={{ width: "100%" }}
            />
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <IconButton aria-label="like">
                <FavoriteBorderIcon style={{ color: "#ffffff" }} />
              </IconButton>
              <IconButton aria-label="comment">
                <ChatBubbleOutlineIcon style={{ color: "#ffffff" }} />
              </IconButton>
              <IconButton aria-label="send">
                <SendOutlinedIcon style={{ color: "#ffffff" }} />
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="save">
                <BookmarkBorderOutlinedIcon style={{ color: "#ffffff" }} />
              </IconButton>
            </div>
          </CardActions>
          <Typography
            variant="caption"
            style={{ color: "#ffffff" }}
            color="textSecondary"
          >
            {post.caption}
          </Typography>
        </Card>
      ))}
    </Container>
  );
}

export default Posts;
