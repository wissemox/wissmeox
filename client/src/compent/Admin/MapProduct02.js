import React from 'react'
import {useDispatch} from 'react-redux'
import {DeleteProduct03} from '../js/action/authActions'
import ModalExample from './ModelUpdate'
const MapProduct02 = ({el}) => {
    const dispatch =useDispatch() 
    const DelteProduct =()=>{
            dispatch(DeleteProduct03(el._id))
    }
    return (
        <div className="ml-10 mt-10">
           
            <div >
                <div style={{width:"300px"}} >
            <img style={{width:"100px" , height:"100px"}}  src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
            </div>
            <p>{el.Name}</p>
            <p>{el.Prix}</p>
           
            </div>
            <div className="flex">
            <button onClick={DelteProduct}>Delte</button>
            <ModalExample el={el}/>
            </div>
        </div>
    )
}

export default MapProduct02
