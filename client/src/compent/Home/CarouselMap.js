import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CarouselMap = ({el}) => {
    return (
     
        <Box boxShadow={5}  className="bg-gris  rounded-3xl	mt-10	  h-150 ml-10">
    <Link to={`/Reserch/${el.Name}`}>
     <img style={{width:"150px" , height:"150px"}} className="bg-gris  rounded-3xl		 "   src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
     </Link>
       {/*           <Link data-Aos="fade"  style={{  textDecoration: "none" ,color:"#EA545F"}}  to={`/Reserch/${el.Name}`}>
 */}
        </Box>
    )
}

export default CarouselMap
