
import {combineReducers} from "redux"
import cartReducer from "./reducers/cardReducer"

const rootReducer = combineReducers({
    cart : cartReducer
})

export default rootReducer;