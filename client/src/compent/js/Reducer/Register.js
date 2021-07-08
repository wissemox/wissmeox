import {
    REGISTER_USER

    } 
from '../constant/actionstype'

const RegisterUser = {

    NewUser:localStorage.getItem('token'),

    
}; 

const RegisterReducer = (state=RegisterUser,{type, payload}) =>{
    switch(type) {
       
        case REGISTER_USER:
            localStorage.setItem('token',payload.token)
            return {
                ...state,  
                ...payload,
            }
   
        
         
    
            default:
                return state;
        
    }
};
export default RegisterReducer