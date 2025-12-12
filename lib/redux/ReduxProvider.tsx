'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cargar filtros desde localStorage al iniciar
    const savedFiltros = localStorage.getItem('bibliotech-filtros');
    if (savedFiltros) {
      try {
        const filtros = JSON.parse(savedFiltros);
        // Dispatch initial state from localStorage
        store.dispatch({ type: 'filtros/setBusqueda', payload: filtros.busqueda || '' });
        store.dispatch({ type: 'filtros/setCategoria', payload: filtros.categoria || '' });
        store.dispatch({ type: 'filtros/setIdioma', payload: filtros.idioma || '' });
        store.dispatch({ type: 'filtros/setDisponibilidad', payload: filtros.disponibilidad || 'todos' });
        store.dispatch({ type: 'filtros/setOrdenarPor', payload: filtros.ordenarPor || 'reciente' });
        store.dispatch({ type: 'filtros/setOrden', payload: filtros.orden || 'desc' });
      } catch (error) {
        console.error('Error loading saved filters:', error);
      }
    }

    // Suscribirse a cambios para guardar en localStorage
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem('bibliotech-filtros', JSON.stringify(state.filtros));
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
