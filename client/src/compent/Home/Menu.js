import React,{useEffect,useState} from 'react'
import Address from './Address'
import RecharcheBar from './RecharcheBar'
import DenseAppBar from './Navbar'
import AppBar from '@material-ui/core/AppBar';

import {CatgoriesAdd} from '../../compent/js/action/authActions'
import {ProductUser} from '../js/action/authActions'
import {useDispatch , useSelector} from 'react-redux'
import ProductMap from './ProductMap'
import TogelMenu01 from './TogelMenu'
import Aos from 'aos'
import "aos/dist/aos.css"
const Menu = ({match}) => {
    const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(ProductUser()) 
    },[])
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const [TogelMenu , setTogelMenu]=useState(false)
  const MenuTogel = ()=>{
      setTogelMenu(!TogelMenu)
  }
    const Product = useSelector(state => state.ProductdALL.ProductAll)
    return (
        <div>
            <Address data-Aos="fade"/>
            <RecharcheBar data-Aos="fade" />
            <DenseAppBar MenuTogel={MenuTogel}/>
            <TogelMenu01 TogelMenu={TogelMenu}/>
            <div data-Aos="fade" className="flex flex-wrap	">
            {Product.filter((catgorie)=>catgorie.Catgory==match).map((el)=><ProductMap el={el}/>)}
            </div>
            
        </div>
    )
}

export default Menu
