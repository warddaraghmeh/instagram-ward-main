import React from "react";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";
import img1 from "../img/ahmad.jpeg";
import img2 from "../img/wardphoto.jpg";
import img3 from "../img/fatima.jpeg";
import img4 from "../img/mohmd.jpeg";
import img5 from "../img/sozan.jpeg";

const useStyles = makeStyles((theme) => ({
  storyAvatar: {
   
    borderRadius: "50%",
    marginRight: "10px",
    border: "2px solid #ff8500",
  },
}));

function Stories() {
  const classes = useStyles();

  const images = [img1, img2, img3, img4, img5, img1, img2];

  return (
    <div style={{ display: "flex", marginTop: "10px"  }}>
      {images.map((image, index) => (
        <Avatar
          sx={{ width: "70px", height: "70px" }}
          key={index}
          alt={`Story ${index + 1}`}
          src={image}
          className={classes.storyAvatar}
        />
      ))}
    </div>
  );
}

export default Stories;
