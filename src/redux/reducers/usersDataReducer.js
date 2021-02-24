import { createSlice } from '@reduxjs/toolkit';
import * as axios from 'axios';

export const usersDataReducer = createSlice({
  name: 'usersData',
  initialState: {
    data: [],
    selectedRows: []
  },
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },
    changeSelected: (state, action) => {
      state.selectedRows = action.payload;
    },
  },
});

export const { saveData, changeSelected } = usersDataReducer.actions;

export const saveReq = () => dispatch => {
  axios.get('/api/users').then(
    (res) => dispatch(saveData([...res.data]))
  );
};

export const selectData = state => state.usersData.data;
export const selectSelected = state => state.usersData.selectedRows;

export default usersDataReducer.reducer;
