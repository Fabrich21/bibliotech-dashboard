import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Libro } from '@/types';

interface LibrosState {
  libros: Libro[];
  loading: boolean;
  error: string | null;
}

const initialState: LibrosState = {
  libros: [],
  loading: false,
  error: null,
};

const librosSlice = createSlice({
  name: 'libros',
  initialState,
  reducers: {
    setLibros: (state, action: PayloadAction<Libro[]>) => {
      state.libros = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addLibro: (state, action: PayloadAction<Libro>) => {
      state.libros.unshift(action.payload);
    },
    updateLibro: (state, action: PayloadAction<Libro>) => {
      const index = state.libros.findIndex((libro) => libro._id === action.payload._id);
      if (index !== -1) {
        state.libros[index] = action.payload;
      }
    },
    deleteLibro: (state, action: PayloadAction<string>) => {
      state.libros = state.libros.filter((libro) => libro._id !== action.payload);
    },
  },
});

export const { setLibros, setLoading, setError, addLibro, updateLibro, deleteLibro } = librosSlice.actions;

export default librosSlice.reducer;
