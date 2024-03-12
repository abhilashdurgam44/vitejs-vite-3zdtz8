 import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './cartSlice'

 
const Store=configureStore({

  reducer:cartReducer
}) 

export default Store;
