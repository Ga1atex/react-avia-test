import { configureStore, combineReducers } from '@reduxjs/toolkit';
import aviaReducer from './reducers/aviaReducer/aviaReducer';

const rootReducer = combineReducers({
  aviaPage: aviaReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>;
