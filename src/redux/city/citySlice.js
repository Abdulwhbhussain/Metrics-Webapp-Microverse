import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  value: [],
};

export const APIKEY = '0d4308594559573ed5e82c5b595a81a2';
export const fetchSearchCity = createAsyncThunk('city/fetchSearchCity', async (cityName) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching city data');
  }
});

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchCity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchCity.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchSearchCity.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

export default citySlice.reducer;
