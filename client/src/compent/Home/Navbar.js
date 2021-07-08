import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';
import Aos from 'aos'
import {Link} from 'react-router-dom'
import "aos/dist/aos.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function DenseAppBar({MenuTogel}) {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <AppBar position="sticky" className={`${classes.root}`}>
        
      <AppBar  data-Aos="fade"  style={{backgroundColor:'#1F2549'}} position="static">
        <Toolbar data-Aos="fade" variant="dense">
          <IconButton onClick={MenuTogel} data-Aos="fade" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon data-Aos="fade"  />
           
          </IconButton>
          <Link to="/" style={{textDecoration:"none" , color:"white"}}>
          <Typography data-Aos="fade" className="pr-10 text-1xl	" variant="p" color="inherit">
            ACCEUIL
          </Typography>
          </Link>
         
         
          
          <Link   to="/Contact" style={{textDecoration:"none" , color:"white"}}><Typography data-Aos="fade" className="pr-10 text-1xl" variant="p" color="inherit">
            CONTACT
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </AppBar>
  );
}
export default DenseAppBar