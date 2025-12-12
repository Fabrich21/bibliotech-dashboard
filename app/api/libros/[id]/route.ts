import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Libro from '@/models/Libro';

// GET - Obtener un libro por ID
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;

    const libro = await Libro.findById(id);

    if (!libro) {
      return NextResponse.json({ success: false, error: 'Libro no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: libro }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Error al obtener libro' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar un libro
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const libro = await Libro.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!libro) {
      return NextResponse.json({ success: false, error: 'Libro no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: libro }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Error al actualizar libro' },
      { status: 400 }
    );
  }
}

// DELETE - Eliminar un libro
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectDB();
    const { id } = await params;

    const libro = await Libro.findByIdAndDelete(id);

    if (!libro) {
      return NextResponse.json({ success: false, error: 'Libro no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Error al eliminar libro' },
      { status: 500 }
    );
  }
}
