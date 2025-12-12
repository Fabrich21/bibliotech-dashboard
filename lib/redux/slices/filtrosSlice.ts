import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filtros } from '@/types';

const initialState: Filtros = {
  busqueda: '',
  categoria: '',
  idioma: '',
  disponibilidad: 'todos',
  ordenarPor: 'reciente',
  orden: 'desc',
  anioDesde: undefined,
  anioHasta: undefined,
};

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState,
  reducers: {
    setBusqueda: (state, action: PayloadAction<string>) => {
      state.busqueda = action.payload;
    },
    setCategoria: (state, action: PayloadAction<string>) => {
      state.categoria = action.payload;
    },
    setIdioma: (state, action: PayloadAction<string>) => {
      state.idioma = action.payload;
    },
    setDisponibilidad: (state, action: PayloadAction<'todos' | 'disponibles' | 'prestados'>) => {
      state.disponibilidad = action.payload;
    },
    setOrdenarPor: (state, action: PayloadAction<'titulo' | 'autor' | 'prestamos' | 'rating' | 'reciente'>) => {
      state.ordenarPor = action.payload;
    },
    setOrden: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.orden = action.payload;
    },
    setRangoAnios: (state, action: PayloadAction<{ desde?: number; hasta?: number }>) => {
      state.anioDesde = action.payload.desde;
      state.anioHasta = action.payload.hasta;
    },
    resetFiltros: () => initialState,
  },
});

export const {
  setBusqueda,
  setCategoria,
  setIdioma,
  setDisponibilidad,
  setOrdenarPor,
  setOrden,
  setRangoAnios,
  resetFiltros,
} = filtrosSlice.actions;

export default filtrosSlice.reducer;
