import React,{useEffect} from 'react'
import './AdmnCssDashBoard.css'
import {useDispatch} from 'react-redux'
import {ProductUser} from '../js/action/authActions'
import MapProduct from './MapProduct'
import {BrowserRouter ,Link,Route,Switch} from 'react-router-dom'
import AchatCommande from './AchatCommande'
import  MapProduct02 from './MapProduct02'
import AppBar from '@material-ui/core/AppBar';

const AdminDashBoard01 = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ProductUser())
    },[])
    
    return (
     
        <div className="DisplayFLexBoxAdmin">
              <BrowserRouter>
              <AppBar style={{backgroundColor:"#1F2649",width:"150px"}} position="sticky">

         <Link to="/Admin/dashboard"> <p> Product</p></Link> 
       
           </AppBar>
           <div className="NavBarAdmin">
           <Route exact path="/Admin/dashboard" render={()=><MapProduct/>}></Route>
           <Route exact path="/Admin/dashboard/user" render={()=><AchatCommande/>}></Route>
           </div>
             
           </BrowserRouter>
        </div>
    )
}

export default AdminDashBoard01
