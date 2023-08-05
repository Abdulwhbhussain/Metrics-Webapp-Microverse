import { configureStore } from '@reduxjs/toolkit';
import citySliceReducer from './city/citySlice';
import detailSliceReducer from './detail/detailSlice';

const store = configureStore({
  reducer: {
    city: citySliceReducer,
    detail: detailSliceReducer,
  },
});

export default store;
