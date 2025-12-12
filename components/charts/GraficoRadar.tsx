'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

interface CategoriaData {
  nombre: string;
  cantidad: number;
}

interface Props {
  data: CategoriaData[];
}

export function GraficoRadar({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Radar de Categorías</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={data.slice(0, 6)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="nombre" tick={{ fontSize: 12 }} />
            <PolarRadiusAxis />
            <Radar 
              name="Cantidad" 
              dataKey="cantidad" 
              stroke="#ec4899" 
              fill="#ec4899" 
              fillOpacity={0.6} 
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
