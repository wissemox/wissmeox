
import axios from 'axios'
import {
   
     REGISTER_USER , 
     LOGIN_USER,
     ADMIN,
     GETPRODUCT,
     LOGOUT,
     GETPRODUCTACHAT, 
     GET_CATGORIES
        }  
from '../constant/actionstype'
export const registerUser = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/auth/register',formData);
        dispatch({
            type:REGISTER_USER , 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}
export const Login03 = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/auth/login',formData);
        dispatch({
            type:LOGIN_USER , 
            //prends le token
            payload:res.data,
            
        })
    }catch(error){
        console.log(error)
    }
}
export const logout = () => dispatch =>{
    dispatch({
        type:LOGOUT
    })
}
// /GetUser/:token

export const GetUser = (formData) => async dispatch =>{
   
    try{
        const res = await axios.get(`/api/auth/GetUser/${formData}`);
        dispatch({
            type:LOGIN_USER , 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}

export const AdminGet = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post(`/api/Admin/Admin/${formData}`);
        dispatch({
            type:ADMIN , 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}


export const CatgoriesGet = (formData) => async dispatch =>{
   
    try{
        const res = await axios.get("/api/Product/Catgory");
      dispatch({
          type:GET_CATGORIES, 
          payload:res.data,
      })
    }catch(error){
        console.log(error)
    }
}
export const CatgoriesAdd = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post("/api/Product/Catgory",formData);
        dispatch(CatgoriesGet())
    }catch(error){
        console.log(error)
    }
}
export const ProductUser = () => async dispatch =>{
   
    try{
        const res = await axios.get('/api/Product/Produc');
        dispatch({
            type:GETPRODUCT, 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}

export const AddProudct = (formdata) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/Product/Produc',formdata);
        dispatch(ProductUser())
    }catch(error){
        console.log(error)
    }
}

export const DeleteProduct03 = (Id) => async dispatch =>{
   
    try{
        await axios.delete(`/api/Product/Produc/${Id}`);
        dispatch(ProductUser())
    }catch(error){
        console.log(error)
    }
}
// /ProductUpdate/:id

export const UpdateProduct04 = (Id,fromdata) => async dispatch =>{
   
    try{
        await axios.put(`/api/Product/Produc/${Id}`,fromdata);
        dispatch(ProductUser())
    }catch(error){
        console.log(error)
    }
}




export const ProductAchatget = () => async dispatch =>{
   
    try{
        const res = await axios.get('/api/Product/ProductAchat');
        dispatch({
            type:GETPRODUCTACHAT, 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}
export const ProductAchat = (formdata) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/Product/ProducAchat',formdata);
        dispatch(ProductAchatget())
    }catch(error){
        console.log(error)
    }
}