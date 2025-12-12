'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CategoriaData {
  nombre: string;
  cantidad: number;
}

interface Props {
  data: CategoriaData[];
}

export function GraficoBarras({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Libros por Categoría</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="nombre" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" fill="#8b5cf6" name="Cantidad de Libros" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
