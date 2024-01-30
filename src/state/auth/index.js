import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: "",
};

export const sliceName = "authSlice";

// Slice
const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      const { payload } = action;
      state.isAuthenticated = payload;
    },
  },
});

// Reducers
export default authSlice.reducer;

// Selectors
export const authSelector = (state) => state.auth;

// Actions
// const { setLoginStatus } = authSlice.actions;

// Thunks
// export const toggleThemeMode = () => (dispatch) => {
//   const { themeMode } = store.getState().ui;
//   const mode = themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;

//   dispatch(setThemeMode(mode));
// };
