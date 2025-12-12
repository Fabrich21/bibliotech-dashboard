'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface LibroPrestamo {
  titulo: string;
  prestamos: number;
}

interface Props {
  data: LibroPrestamo[];
}

export function GraficoLineas({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Top 5 Libros Más Prestados</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="titulo" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              tick={{ fontSize: 11 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="prestamos" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Préstamos"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
