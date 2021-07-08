import React , {useState,useEffect} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button , Input  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector} from 'react-redux'
import {ProductUser} from '../js/action/authActions'
import {useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
const RecharcheBar = () => {
    const [ReserchBar , setReserchBar]=useState()
    const Product = useSelector(state => state.ProductdALL.ProductAll)
 
     const dispatch = useDispatch()
     useEffect(()=>{
       dispatch(ProductUser()) 
   },[])
   useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
    return (
        <>
    <Box className="flex mt-3 mb-3 ml-20p ">


     
           <Box>
           <Input className="w-600" value={ReserchBar} onChange={(e)=>setReserchBar(e.target.value)}/>
           {console.log(ReserchBar)}
           
           <IconButton>
           <SearchIcon/>
           </IconButton>
           </Box>
        </Box>
        <Box data-Aos="fade"   boxShadow={5} style={{marginLeft:"30%" , marginBottom:"10px"}} className="w-600  ">
      

           {ReserchBar&&Product.filter((el)=>el.Name.toLocaleLowerCase().includes(ReserchBar.toLocaleLowerCase().trim())).map((el)=>
          <Link data-Aos="fade"  style={{  textDecoration: "none" ,color:"#1F2649"}}  to={`/Reserch/${el.Name}`}><Box className="flex ClickHover ">
               <Box data-Aos="fade"  className="mb-2 mt-2" >  
                </Box>
                <Box data-Aos="fade"   className="mb-2 mt-2 pl-10 flex"> 
                <img style={{width:"80px" , marginRight:"50px"}} src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>

                <p  data-Aos="fade-left"  style={{width:"150px"}} >{el.Name}</p>
                <p data-Aos="fade-left" style={{width:"100px"}} className="pl-20" >{el.Prix}</p>
                <p data-Aos="fade-left" style={{width:"100px"}} className="pl-20">{el.Catgory}</p>
                </Box>
           </Box> 
           </Link> )}
        </Box>
        </>
    )
}

export default RecharcheBar
