import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from './reducers/usersDataReducer';

export default configureStore({
  reducer: {
    usersData: usersDataReducer,
  },
});
