import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from 'react-router-dom'
const ProductMap = ({el , i}) => {
    // Rate Function here 
    const[Rate , setRate]=useState(1)
    const[togelTrue , setTogelTrue]=useState(false)
    const [Numbedr , setNumber]=useState(0)
    const GetNumber=()=>{
      setNumber(i)
      setTogelTrue(!togelTrue)
    }

    {console.log(Numbedr)}
    return (
      <Box>
        <Box style={{width:"320px" }}  boxShadow={3} className=" bg-white mr-10 mt-10 rounded-3xl scalAnimation	">
            <Box style={{display:"flex", marginLeft:"20px"}}>
              <Box>
        <Link style={{  textDecoration: "none", color:"black" }}  to={`/ProductDetiled/${el.Name}`}> 

     <img  data-Aos="fade-left"  style={{width:"150px" ,height:"150px",marginLeft:"70px" , marginTop:"20px", marginBottom:"20px"}} src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
     </Link>
     </Box>
     </Box>
                <Box    className="absolute flex marginLeaftProfile mt-140  "> 
                    
                </Box>
                <Box boxShadow={5} className="rounded-xl  ">
                <Link style={{  textDecoration: "none", color:"black" }}  to={`/ProductDetiled/${el.Name}`}> 

              </Link>

                </Box>
                 <Box >
                    <Box style={{ height:"60px",marginLeft:"10px" , paddingBottom:"50px", paddingTop:"50px"}}>
                    <Typography   className="font-semibold pb-10 f-20" variant="p">Product  : {el.Name}</Typography>
                    </Box>
                  
                    <Box style={{marginLeft:"10px"}} className="pt-1 ">
                        <Typography className="font-semibold	" variant="p">Etat :</Typography>
                        <Typography  style={{color:"#9B9B9B" , fontWeight:"00"}} variant="p"> Parfait</Typography>
                    </Box>
                 
                    <Box style={{color:"#BCBCBC" , height:"50px",marginLeft:"10px" }} className="flex pt-2">
                        
                        <Typography className="pr-4 f2-12"  variant="p"> <p>{el.Catgory}</p> </Typography>
           
        
                    </Box>
                 

                    <Box  className="flex border-b-2	mr-4 ">
                        <Box  style={{width:"40%" , marginLeft:"10px" , height:"30px"}} className="bg-red mt-3 rounded-full mb-3	">
                        
                    
                           <Typography style={{color:"white" , marginLeft:"10px"}} className="f-14" variant="p">Prix : {el.Prix}Dt </Typography>
                        </Box>
                        <Box className="mt-3 ">
                        </Box>
                        
                    </Box>
                   
                 
                </Box>
                <Box className="rounded-b-lg  text-center py-3	font-semibold	" style={{background:"#1F2649"}}>
              
              <Typography onClick={GetNumber} className="text-white  " variant="p">See more</Typography>
            
      </Box>
 
        </Box>
             {i===Numbedr && togelTrue && 
              <Box style={{width:"320px",backgroundColor:"#f2f2f2" , padding:"10px"}} className="AnimaiionNavbarSticky">
              <p>Descraption : {el.Descraption}</p>   
              </Box>
              }
          </Box>
    )
}

export default ProductMap
