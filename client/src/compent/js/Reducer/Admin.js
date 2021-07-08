import {
    ADMIN

    } 
from '../constant/actionstype'

const Admin = {

    msg:null,

    
}; 

const ADMIN02 = (state=Admin,{type, payload}) =>{
    switch(type) {
       
        case ADMIN:
            
       
            return {
                
                ...state,  
                ...payload,
            }
        
        
         
    
            default:
                return state;
        
    }
};
export default ADMIN02