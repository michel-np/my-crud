import React, { useEffect, useState } from "react";
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Button,
  Drawer
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = ({ component }) => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerStatus(open);
  };


  return (<>
  
    <div style={{ marginTop: "70px" }}>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link href="/">
                <Typography>Home</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Button onClick={toggleDrawer(true)}>Menu</Button>
            </Grid>
          </Grid>
          <Drawer anchor={'right'} open={drawerStatus} onClose={toggleDrawer(false)}>
            <div style={{width:250, height:'100%', display:'flex', flexDirection:'column', padding:'10%',backgroundColor:'#333333'}}>
              {['Messages', 'My Account', 'Log out'].map((text, index) => (
              <Typography style={{padding:'10px 0px', color:'#f2f2f2'}}> {text}</Typography>
            ))}
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
      {component}
    </div>
  </>
    
  );
};

export default Page;
