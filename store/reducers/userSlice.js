import { createSlice } from '@reduxjs/toolkit'
import { saveState, removeState } from '../../services/browser.services';

const initialState = {
  isLogged: false,
  token: null,
  data: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    retrieveUser: (state, {payload}) => payload,
    addUser: (state, {payload}) => {
      saveState('user-data', payload);
      return payload;
    },
    updateUser: (state, {payload}) => {
      saveState('user-data', payload);
      return payload;
    },
    clearUser: (state) => {
      removeState('user-data');
      return initialState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { retrieveUser, addUser, updateUser, clearUser } = userSlice.actions

export default userSlice.reducer