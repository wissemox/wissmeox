import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  './MapProduct.css'
import ModalExample from './model'
import  MapProduct02 from './MapProduct02'
import {DeleteProduct03} from '../js/action/authActions'
const MapProduct = () => {
    const ProductMap = useSelector(state => state.ProductdALL)
    const dispatch = useDispatch()
  
    return (
        <div>
            {console.log(ProductMap)}
            
            <div style={{width:"100%"}} className="flex flex-wrap"  >
            {ProductMap&&ProductMap.ProductAll.map((el)=><MapProduct02 el={el}/>)}
            </div>
            <div style={{width:"30%" , marginTop:"100px"}}>
            <ModalExample/>
            </div>
           
           
        </div>
    )
}

export default MapProduct
