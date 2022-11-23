import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { loadState } from '../services/browser.services'
// reducers
import userReducer from './reducers/userSlice'

const reducers = combineReducers({
  user: userReducer,
  // add here your all reducers
})

export default configureStore({
  devTools: true,
  reducer: reducers,
  // here we restore the previously persisted state
  preloadedState: {
    user: loadState('user-data'),
    // add all preloaded store data
  },
});
