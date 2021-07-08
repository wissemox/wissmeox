import React ,{useEffect} from 'react'
import Box from '@material-ui/core/Box';
import {useDispatch,useSelector} from 'react-redux'
import {CatgoriesAdd} from '../../compent/js/action/authActions'
import {Link} from 'react-router-dom'
import { colors } from '@material-ui/core';
const TogelMenu01 = ({TogelMenu}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(CatgoriesAdd())
      },[])
      const Catgories = useSelector(state => state.Cagories.CatgoryAll)

    return (
        <div>
            {TogelMenu ?  <Box  boxShadow={5} className="BoxShadow" style={{width:"20%" }} className="bg-white">
          {Catgories&&Catgories.map((el)=>
          <>
          <div className="ml-2 mt-2 pt-2 p-3 pl-10">
         <Link className="font-semibold" style={{  textDecoration: "none" ,color:"#1F2649"}} to={`/Menu/${el.name}`}> <p> {el.name}</p></Link>
          </div>
       
        </>

        )}
             
          </Box>:null}

           
         
        </div>
    )
}

export default TogelMenu01
