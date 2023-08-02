import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIKEY } from '../city/citySlice';

export const fetchDetailAPI = createAsyncThunk('detail/fetchDetailAPI', async ({ lat, lon }) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching detail data');
  }
});

const detailSlice = createSlice({
  name: 'detail',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailAPI.fulfilled, (state, action) => action.payload);
  },
});

export default detailSlice.reducer;
