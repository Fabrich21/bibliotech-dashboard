'use client';

import { useState, useEffect } from 'react';
import { TarjetasEstadisticas } from '@/components/charts/TarjetasEstadisticas';
import { GraficoBarras } from '@/components/charts/GraficoBarras';
import { GraficoTorta } from '@/components/charts/GraficoTorta';
import { GraficoLineas } from '@/components/charts/GraficoLineas';
import { GraficoArea } from '@/components/charts/GraficoArea';
import { GraficoRadar } from '@/components/charts/GraficoRadar';

interface Estadisticas {
  totalLibros: number;
  totalPrestamos: number;
  librosDisponibles: number;
  categorias: { nombre: string; cantidad: number }[];
  librosMasPrestados: { titulo: string; prestamos: number }[];
  distribuccionIdiomas: { idioma: string; cantidad: number }[];
  ratingPromedio: number;
}

export default function DashboardPage() {
  const [estadisticas, setEstadisticas] = useState<Estadisticas | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEstadisticas();
  }, []);

  const fetchEstadisticas = async () => {
    try {
      const response = await fetch('/api/estadisticas');
      const result = await response.json();
      if (result.success) {
        setEstadisticas(result.data);
      }
    } catch (error) {
      console.error('Error fetching estadísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (!estadisticas) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No se pudieron cargar las estadísticas</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-1">Estadísticas y métricas de la biblioteca</p>
      </div>

      {/* Tarjetas de Estadísticas */}
      <TarjetasEstadisticas
        totalLibros={estadisticas.totalLibros}
        totalPrestamos={estadisticas.totalPrestamos}
        librosDisponibles={estadisticas.librosDisponibles}
        ratingPromedio={estadisticas.ratingPromedio}
      />

      {/* Gráficos - Grid Responsivo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GraficoBarras data={estadisticas.categorias} />
        <GraficoTorta data={estadisticas.distribuccionIdiomas} />
        <GraficoLineas data={estadisticas.librosMasPrestados} />
        <GraficoArea data={estadisticas.librosMasPrestados} />
      </div>

      {/* Gráfico Radar - Full Width */}
      <div className="grid grid-cols-1">
        <GraficoRadar data={estadisticas.categorias} />
      </div>
    </div>
  );
}
