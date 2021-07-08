import React,{useEffect,useState} from 'react'
import Address from './Address'
import RecharcheBar from './RecharcheBar'
import DenseAppBar from './Navbar'
import {CatgoriesAdd} from '../../compent/js/action/authActions'
import {ProductUser} from '../js/action/authActions'
import {useDispatch , useSelector} from 'react-redux'
import ProductMap from './ProductMap'
import TogelMenu01 from './TogelMenu'
const Reserch02 = ({match}) => {
    const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(ProductUser()) 
    },[])
    const [TogelMenu , setTogelMenu]=useState(false)
  const MenuTogel = ()=>{
      setTogelMenu(!TogelMenu)
  }
    const Product = useSelector(state => state.ProductdALL.ProductAll)
    return (
        <div>
            <Address/>
            <RecharcheBar/>
            <DenseAppBar MenuTogel={MenuTogel}/>
            <TogelMenu01 TogelMenu={TogelMenu}/>
            <div className="flex flex-wrap	">
            {Product.filter((catgorie)=>catgorie.Name==match).map((el)=><ProductMap el={el}/>)}
    
            </div>
            
        </div>
    )
}

export default Reserch02
