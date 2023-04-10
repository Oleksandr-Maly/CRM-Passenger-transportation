import { configureStore } from '@reduxjs/toolkit';
import userReducer, { localStorageMiddleware, initialUserState } from './slices/usersSlice';

const loadUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || initialUserState;
  } catch (e) {
    console.log(e);
    return initialUserState;
  }
};

const preloadedState = {
  user: loadUser(),
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [localStorageMiddleware],
  preloadedState,
});
