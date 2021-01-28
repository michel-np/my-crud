import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";

const Page = ({ component }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Typography>Test</Typography>
            </Grid>
            <Grid item>
              <Typography>
                <span style={{ padding: "0px 4px" }}>Teste</span>
                <span>Teste</span>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <Grid container>
        <Grid item xs={3} style={{ backgroundColor: "aqua", width: "100%" }}>
          aa
        </Grid>
        <Grid item xs style={{ backgroundColor: "#ffeeff" }}>
          aa
        </Grid>
      </Grid> */}
      {/* <div
        style={{
          display: "flex",
          backgroundColor: "gray",
          width: "100%",
          justifyContent: "space-between",
          height: "200px",
        }}
      >
        <div style={{ backgroundColor: "red", width: "30%" }}></div>
        <div style={{ backgroundColor: "green", width: "30%" }}></div>
        <div style={{ backgroundColor: "blue", width: "30%" }}></div>
      </div> */}
      {component}
    </div>
  );
};

export default Page;
