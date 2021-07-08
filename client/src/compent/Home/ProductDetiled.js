import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {ProductUser} from '../js/action/authActions'
import Address from './Address'
import RecharcheBar from './RecharcheBar'
import DenseAppBar from './Navbar'
const ProductDetiled = ({match}) => {
  
    const Product = useSelector(state => state.ProductdALL.ProductAll)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProductUser())
      }, [])
    return (
        <div>
          <Address/>
          <RecharcheBar/>
          <DenseAppBar/>
            {Product&&Product.filter((catgorie)=>catgorie.Name==match).map((el)=>
                <div data-Aos="fade-left" className="flex"> 
                 <div style={{marginLeft:"10%",marginTop:"50px"} }> 
                 <img data-Aos="fade-left" className="rounded-3xl"  data-Aos="fade-left"  style={{width:"400px" ,height:"400px"}} src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
                 </div>
                 <div data-Aos="fade-left" style={{backgroundColor:"#F2F2F2",color:"#1F2649" }} className="mt-14 text-xl 			">
                     <div style={{width:"300px"}} className="ml-10 mr-10 mt-10" >
                     <p>Name : {el.Name}</p>
                     <p>Prix :{el.Prix}</p>
                     <p>Catgory : {el.Catgory}</p>

                    <p>Descraption :{el.Descraption}</p>
                    </div>
                    </div>
                 </div>

            )}
        </div>
    )
}

export default ProductDetiled
