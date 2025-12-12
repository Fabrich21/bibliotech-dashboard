import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import filtrosReducer from './slices/filtrosSlice';
import librosReducer from './slices/librosSlice';

export const store = configureStore({
  reducer: {
    filtros: filtrosReducer,
    libros: librosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
