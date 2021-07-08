import React,{useEffect} from 'react'
// ProductAchatget
import {useDispatch, useSelector} from 'react-redux'
import {ProductAchatget} from '../js/action/authActions'
import AchatCommandeMap from './AchatCommandeMap'
const AchatCommande = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(ProductAchatget())
    },[])
    const AchatCommande =useSelector(state => state.GetProductAchatuser.GetProductAchat)
    return (
        <div>
        {console.log(AchatCommande)}
        {AchatCommande&&AchatCommande.GetProductAchat.map((el)=><AchatCommandeMap el={el}/>)}
            <p>Ahla</p>
        </div>
    )
}

export default AchatCommande
