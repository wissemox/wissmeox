import {
    
    GETPRODUCT
    } 
from '../constant/actionstype'

const ProductReducer = {

    ProductAll:[],

    
}; 

const ProductdALL = (state=ProductReducer,{type, payload}) =>{
    switch(type) {
       
        case GETPRODUCT:
         
            return {
                ...state,  
                ...payload,
              
            }
   
        
         
    
            default:
                return state;
        
    }
};
export default ProductdALL