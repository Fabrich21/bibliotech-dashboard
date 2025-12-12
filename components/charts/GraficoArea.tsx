'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LibroPrestamo {
  titulo: string;
  prestamos: number;
}

interface Props {
  data: LibroPrestamo[];
}

export function GraficoArea({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Tendencia de Préstamos</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
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
            <Area 
              type="monotone" 
              dataKey="prestamos" 
              stroke="#3b82f6" 
              fill="#3b82f6"
              fillOpacity={0.6}
              name="Préstamos"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
