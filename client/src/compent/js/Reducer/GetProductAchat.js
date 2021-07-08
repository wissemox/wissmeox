import {
    GETPRODUCTACHAT

    } 
from '../constant/actionstype'

const GetProductAchat = {

    msg:null,
    GetProductAchat:null
    
}; 

const GetProductAchatuser = (state=GetProductAchat,{type, payload}) =>{
    switch(type) {
       
        case GETPRODUCTACHAT:
            
       
            return {
                
                ...state,  
                GetProductAchat:payload,
            }
        
        
         
    
            default:
                return state;
        
    }
};
export default GetProductAchatuser