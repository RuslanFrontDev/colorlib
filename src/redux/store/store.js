import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "../navbarMenuSlice"
export const store = configureStore({
   reducer: {
      menu: menuReducer
   },
})
