import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Libro from '@/models/Libro';

export async function GET() {
  try {
    await connectDB();

    const [
      totalLibros,
      totalPrestamosResult,
      librosDisponiblesResult,
      categorias,
      librosMasPrestados,
      distribuccionIdiomas,
      ratingPromedioResult,
    ] = await Promise.all([
      Libro.countDocuments(),
      Libro.aggregate([{ $group: { _id: null, total: { $sum: '$prestamos' } } }]),
      Libro.aggregate([{ $group: { _id: null, total: { $sum: '$disponibles' } } }]),
      Libro.aggregate([
        { $group: { _id: '$categoria', cantidad: { $sum: 1 } } },
        { $project: { nombre: '$_id', cantidad: 1, _id: 0 } },
        { $sort: { cantidad: -1 } },
      ]),
      Libro.find().sort({ prestamos: -1 }).limit(5).select('titulo prestamos').lean(),
      Libro.aggregate([
        { $group: { _id: '$idioma', cantidad: { $sum: 1 } } },
        { $project: { idioma: '$_id', cantidad: 1, _id: 0 } },
        { $sort: { cantidad: -1 } },
      ]),
      Libro.aggregate([{ $group: { _id: null, promedio: { $avg: '$rating' } } }]),
    ]);

    const estadisticas = {
      totalLibros,
      totalPrestamos: totalPrestamosResult[0]?.total || 0,
      librosDisponibles: librosDisponiblesResult[0]?.total || 0,
      categorias,
      librosMasPrestados: librosMasPrestados.map((libro: any) => ({
        titulo: libro.titulo,
        prestamos: libro.prestamos,
      })),
      distribuccionIdiomas,
      ratingPromedio: ratingPromedioResult[0]?.promedio || 0,
    };

    return NextResponse.json({ success: true, data: estadisticas }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
}
