
import React,{useState} from 'react'
import './App.css';

import {BrowserRouter ,Route} from 'react-router-dom'

import Admin from './compent/Admin/Admin'
import AdminDashBoard from './compent/Admin/AdminDashBoard'
import Home from'./compent/Home/Home'
import './css/Widht.css'
import './css/Border.css'
import './css/margin.css'
import './css/Resposive/Navbar.css'
import './css/Resposive/Crouseel.css'
import './css/Resposive/Product.css'
import Menu from './compent/Home/Menu'
import Reserch02 from './compent/Home/Reserch'
import ProductDetiled from './compent/Home/ProductDetiled'
import Contact from './compent/Home/Contact'
function App() {
  const[AlertTogel , setAlertTogel]=useState(false)
  
  return (
    <div >
      <BrowserRouter>
     {/* Home */}

     <Route exact path="/" render={()=> <Home/>}/>
     {/* Admin */}
      <Route exact path="/Admin/dashboard" render={()=><AdminDashBoard/>}/>
       <Route exact path="/Menu/:token" render={({match})=><Menu match={match.params.token}/>}/> 
       <Route exact path="/Reserch/:token" render={({match})=><Reserch02 match={match.params.token}/>}/> 
       <Route exact path="/ProductDetiled/:token" render={({match})=><ProductDetiled match={match.params.token}/>}/> 
       <Route exact path="/Contact" render={()=><Contact/>}/> 

      <Route exact path="/Admin" render={()=> <Admin/>}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
