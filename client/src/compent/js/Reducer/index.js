import {combineReducers} from 'redux'
import RegisterReducer from './Register'
import LoginUser from './login'
import ADMIN02 from './Admin'
import ProductdALL from './Product'
import GetProductAchatuser from './GetProductAchat'
import Cagories from './Catgories'
export default combineReducers({RegisterReducer,LoginUser,ADMIN02,ProductdALL,GetProductAchatuser , Cagories})