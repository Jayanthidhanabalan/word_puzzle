import {configureStore} from '@reduxjs/toolkit';
import commonReducer from './puzzle/reducer';

const store = configureStore({
  reducer: {
    commonReducer: commonReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;