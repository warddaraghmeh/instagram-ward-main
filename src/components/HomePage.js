import React from "react";

import { Grid } from "@mui/material";

import Stories from "./Stories";

 
import Posts from "./Posts";
import Followers from "./Followers";
function HomePage() {
  return (
    <div style={{display:"flex"}}>
      <div> 
      <Grid  xs={9}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stories />
          <Posts />
        </div>
      </Grid>
      </div>
      <div> 
      <Grid   sx={2}  >
       <Followers/>
      </Grid>
      </div>
    </div>
  );
}

export default HomePage;
