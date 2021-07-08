import {
    GET_CATGORIES

    } 
from '../constant/actionstype'

const GetCatgories = {

    msg:null,

    
}; 

const Cagories = (state=GetCatgories,{type, payload}) =>{
    switch(type) {
       
        case  GET_CATGORIES:
            
       
            return {
                
                ...state,  
                ...payload,
            }
        
        
         
    
            default:
                return state;
        
    }
};
export default Cagories