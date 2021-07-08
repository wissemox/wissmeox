import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import Aos from 'aos'
import {Link} from 'react-router-dom'
import "aos/dist/aos.css"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({el}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <Box  >
<Box  boxShadow={6}  data-Aos="fade" className={`${classes.root} ml-14 mt-20 ResposiveProduct rounded-2xl  py-10	` }>
        <Box >
        <Link style={{  textDecoration: "none", color:"black" }}  to={`/ProductDetiled/${el.Name}`}> 

     <img  data-Aos="fade-left"  style={{width:"200px" ,height:"200px",marginLeft:"40px"}} src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
     </Link>

     </Box>
     
          
          <Box style={{width:"250px" , height:"150px"}} className="ml-4 mt-3 " >
          <div className="flex text-xl 	">
              <p style={{width:"60px"}} data-Aos="fade-right">Name:</p>
          <p   className="pl-10"  data-Aos="fade-left">{el.Name}</p>
          </div>
          <div     data-Aos="fade" className="flex text-xl	 	">
              <p  style={{width:"60px"}}  data-Aos="fade-left">Catgory:</p>
          <p className="pl-10"  style={{width:"150px"}}data-Aos="fade-right">{el.Catgory}</p>
          </div>
          <div data-Aos="fade-left" className="flex text-xl		">
            <Box className="flex w-11">
              <p   style={{color:"white",width:"100px"}} className="bg-red rounded-3xl pl-2	"  data-Aos="fade-right">Prix:</p>
          <p   style={{width:"150px"}} className="pl-5"     data-Aos="fade-left">{el.Prix}Dt</p>
          </Box>
          </div>

          </Box>
       
  
      <CardActions style={{height:"20px"}} disableSpacing>
       
    
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="mt-10">
          <Typography  paragraph>Decaription:</Typography>
          <Typography   paragraph>
          {el.Descraption}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Box>
    </Box>
    
  );
}