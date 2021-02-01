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
import HomeIcon from '@material-ui/icons/Home';


const Page = ({ component }) => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerStatus(open);
  };


  return (<>
  
    <div style={{ marginTop: "63px" }}>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <IconButton onClick={() => router.push('/')}>
              <HomeIcon style={{color:'white', fontSize:30}} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon style={{color:'white'}}/>
              </IconButton>
            </Grid>
          </Grid>
          <Drawer anchor={'right'} open={drawerStatus} onClose={toggleDrawer(false)}>
            <div style={{width:250, height:'100%', display:'flex', flexDirection:'column', padding:'10%',backgroundColor:'#333333'}}>
              {[{label:'Messages', route:'/messages'}, {label:'On the works', route:''}, {label:'On the works', route:''}].map((text) => (
              <div onClick={toggleDrawer(false)}>
                <Link href={text.route}>
                <Typography style={{padding:'10px 0px', color:'#f2f2f2'}}> {text.label}</Typography>
              </Link>
              </div>
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
