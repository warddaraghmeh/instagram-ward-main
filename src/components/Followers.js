import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import img1 from "../img/ahmad.jpeg";
import img2 from "../img/wardphoto.jpg";
import img3 from "../img/fatima.jpeg";
import img4 from "../img/mohmd.jpeg";
import img5 from "../img/sozan.jpeg";

function Followers() {
  const dataFollowers = [
    { name: " omar_daraghmeh", shortCut: "omar", imgUrl: img1 },
    { name: "ibrahem_shawahni", shortCut: "ibrahem", imgUrl: img1 },
    { name: "moth_Abd-Alrazeq", shortCut: "moath", imgUrl: img4 },
    { name: "sozan_sozan", shortCut: "sozan", imgUrl: img3 },
    { name: " jorgena-pean ", shortCut: "jorgena", imgUrl: img5 },
  ];

  return (
    <Stack direction="column" spacing={2} style={{ marginTop: "15px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <Avatar style={{ marginRight: "10px" }} alt="ward" src={img2} />
        </div>
        <div>
          <Typography
            variant="subtitle1"
            style={{ color: "white", fontSize: "12px" }}
          >
            ward_Abd_alrazeq
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "white", fontSize: "10px" }}
          >
            ward
          </Typography>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button
            style={{
              border: "none",
              background: "none",
              color: "lightblue",
              fontSize: "10px",
            }}
          >
            Switch
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Typography
          variant="subtitle1"
          style={{ color: "white", fontSize: "12px", marginRight: "30px" ,fontWeight: "bold" }}
        >
          Suggestions for you
        </Typography>
        <button
          style={{
            border: "none",
            background: "none",
            color: "lightblue",
            fontSize: "10px",
            cursor: "pointer",
             
          }}
        >
          See more
        </button>
      </div>

      {dataFollowers.map((follower, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", margin: "12px 0" }}
        >
          <Avatar alt={follower.name} src={follower.imgUrl} />
          <div style={{ marginLeft: "10px" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", fontSize: "12px" }}
            >
              {follower.name}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "white", fontSize: "10px" }}
            >
              {follower.shortCut}
            </Typography>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <button
              style={{
                border: "none",
                background: "none",
                color: "lightblue",
                fontSize: "10px",
                cursor: "pointer",
              }}
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </Stack>
  );
}

export default Followers;
