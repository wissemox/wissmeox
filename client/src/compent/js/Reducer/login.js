import {
    LOGIN_USER,
    LOGOUT
    } 
from '../constant/actionstype'

const LoggedUser = {

    Logged:null,
    token: localStorage.getItem('token') ,
    Logout:false

    
}; 

const LoginUser = (state=LoggedUser,{type, payload}) =>{
    switch(type) {
       
        case LOGIN_USER:
            
       
            return {
                
                ...state,  
                ...payload,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                Logout:true
            }
         
    
            default:
                return state;
        
    }
};
export default LoginUser