import React,{useEffect,useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

import {ProductUser} from '../js/action/authActions'
import ProductMap from './ProductMap'
const Product = () => {
    const dispatch =useDispatch()
    const[Number , setNumber]=useState(4)
    const[True , setTrue]=useState(true)
    const VoirPlus = ()=>{
        setNumber(0)
        setTrue(!True)
      }
      const VoirPlus02 = ()=>{
        setNumber(4)
        setTrue(!True)
      }
    useEffect(()=>{
        dispatch(ProductUser()) 
    },[])
    const Product = useSelector(state => state.ProductdALL.ProductAll)
    return (
        <div>
            <div className="mt-10 mb-10 ml-14 font-semibold 	">
             <div style={{width:"100%"}} className="flex flex-wrap Resposive02	">
             {Product.map((el)=><ProductMap el={el}/>)}
         
             </div>
             {/* <div style={{marginLeft:"50%" , marginTop:"5%"}}>
             {True ?  <Button style={{backgroundColor:"#EA545F",color:"white" ,height:"50px"}} onClick={VoirPlus}><p className="pt-3">Show</p></Button> :  <Button  className="pt-3" style={{backgroundColor:"#EA545F" , color:"white",height:"50px"}} onClick={VoirPlus02}><p>UnShow</p></Button> }             </div> */}
             
            </div>
             

           

            <div className="mt-10 mb-10  ml-25  font-semibold	">
             <p>Smartphone</p>
             <div className="flex flex-wrap	">
             {Product.filter((catgorie)=>catgorie.Catgory=="smartphone").map((el)=><ProductMap el={el}/>)}
         
             </div>
             
             
            </div>
             
        </div>
    )
}

export default Product
