import React,{useState} from 'react'
import './Admin.css'
import {AdminGet} from '../js/action/authActions'
import {useDispatch , useSelector}from 'react-redux'
import AdminDashBoard from './AdminDashBoard'
import {Redirect} from 'react-router-dom'

const Admin = () => {
    const[Admin02 , setAdmin02]=useState()
    const dipatch =useDispatch()
    const PostAdmin =()=>{
        localStorage.setItem('id',JSON.stringify(Admin02))
        dipatch(AdminGet(Admin02))
    }
    // /Admin/dashboard
    const AdminRedirect = useSelector(state => state.ADMIN02.msg)
    return (
        <div>
           <div className="AdminSignup">
               {console.log(AdminRedirect)}
               {AdminRedirect&&<Redirect to="/Admin/dashboard"/>}
            <p>Admin</p>
            <input value={Admin02} onChange={(e)=>setAdmin02(e.target.value)}/>
            <div className="Button55">
            <button onClick={PostAdmin}>Submite</button>
            
            </div>
            </div>
       
        </div>
    )
}

export default Admin
