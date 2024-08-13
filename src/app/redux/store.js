import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './features/Counter/CounterSlice'

export const store = configureStore({
  reducer: {
   WsCounter:CounterSlice,
   
  },
})