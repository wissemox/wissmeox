import React,{useEffect} from 'react'
import {useDispatch , useSelector}from 'react-redux'
import {AdminGet} from '../js/action/authActions'
import AdminDashBoard01 from './AdminDashBoard01'
const AdminDashBoard = () => {
    const id = JSON.parse(localStorage.getItem('id'))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(AdminGet(id))
    },[])
    const AdminRedirect = useSelector(state => state.ADMIN02.msg)
    return (
        <div>
            {console.log(AdminRedirect)}
            {AdminRedirect? <AdminDashBoard01/> : <p>Spinner</p>}
           
        </div>
    )
}

export default AdminDashBoard
