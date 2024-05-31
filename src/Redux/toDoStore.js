import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from './toDoSlice';

export const toDoStore = configureStore({
  reducer: {
    todos: toDoSlice,
  },
});