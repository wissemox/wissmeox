import React,{useState,useEffect} from 'react'
import Address from './Address'
import RecharcheBar from './RecharcheBar'
import DenseAppBar from './Navbar'
import Carouseel from './Carouseel'
import Product from './Product'
import AppBar from '@material-ui/core/AppBar';

import Sponsur from './Sponsur'
import Box from '@material-ui/core/Box';
import {useDispatch,useSelector} from 'react-redux'
import Menu from './Menu'
import TogelMenu01 from './TogelMenu'
import {CatgoriesAdd} from '../../compent/js/action/authActions'
import {Link} from 'react-router-dom'
import Nouvetes from './Nouvetes'
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
    const [TogelMenu , setTogelMenu]=useState(false)
  const MenuTogel = ()=>{
      setTogelMenu(!TogelMenu)
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(CatgoriesAdd())
  },[])
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  const Catgories = useSelector(state => state.Cagories.CatgoryAll)
  
    return (
        <div>
           
          <Address data-Aos="fade"/>
          <RecharcheBar />
          <AppBar style={{backgroundColor:"#1F2649"}} position="sticky">
          <DenseAppBar  MenuTogel={MenuTogel}/>
          <TogelMenu01 TogelMenu={TogelMenu}/>
          </AppBar>
          <Carouseel  className="absolute" TogelMenu={TogelMenu}/>
          <Nouvetes/>
          <Product/>
          <Sponsur/>
        </div>
    )
}

export default Home
