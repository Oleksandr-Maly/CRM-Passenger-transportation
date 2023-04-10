import { createSlice } from '@reduxjs/toolkit';

export const initialUserState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { user } = store.getState();
  localStorage.setItem('user', JSON.stringify(user));
  return result;
};

export default userSlice.reducer;
