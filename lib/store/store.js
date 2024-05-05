import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducer'

const makeStore = () => {
  return configureStore({
    reducer: reducers
  })
}
 export default makeStore;