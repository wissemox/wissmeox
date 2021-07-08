import {createStore , compose , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk'
import rootReducer from "../Reducer"
const middlerwares = [thunk]
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(...middlerwares),
    )
); 
export default store