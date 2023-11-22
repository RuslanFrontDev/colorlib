import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navbarClick: false,
}

export const navbarMenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setNavbarClick: (state) => {
      state.navbarClick = !state.navbarClick;
    }
  },
})

// Action creator
export const { setNavbarClick } = navbarMenuSlice.actions;

// Reducer
export default navbarMenuSlice.reducer;
