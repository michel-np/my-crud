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
import Link from "next/link";

const Page = ({ component }) => {
  return (
    <div style={{ marginTop: "70px" }}>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link href="/">
                <Typography>Home</Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {component}
    </div>
  );
};

export default Page;
