'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, BookCheck, Library, TrendingUp } from 'lucide-react';

interface Props {
  totalLibros: number;
  totalPrestamos: number;
  librosDisponibles: number;
  ratingPromedio: number;
}

export function TarjetasEstadisticas({ totalLibros, totalPrestamos, librosDisponibles, ratingPromedio }: Props) {
  const stats = [
    {
      title: 'Total de Libros',
      value: totalLibros.toLocaleString(),
      icon: Library,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Total Préstamos',
      value: totalPrestamos.toLocaleString(),
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Libros Disponibles',
      value: librosDisponibles.toLocaleString(),
      icon: BookCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Rating Promedio',
      value: ratingPromedio.toFixed(1),
      icon: BookOpen,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-full`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
