import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILibro extends Document {
  titulo: string;
  autor: string;
  isbn: string;
  categoria: string;
  editorial: string;
  anioPublicacion: number;
  numeroPaginas: number;
  idioma: string;
  disponibles: number;
  totalCopias: number;
  prestamos: number;
  rating: number;
  portada?: string;
  descripcion?: string;
  fechaAdquisicion: Date;
  createdAt: Date;
  updatedAt: Date;
}

const LibroSchema = new Schema<ILibro>(
  {
    titulo: {
      type: String,
      required: [true, 'El título es requerido'],
      trim: true,
      maxlength: [200, 'El título no puede tener más de 200 caracteres'],
    },
    autor: {
      type: String,
      required: [true, 'El autor es requerido'],
      trim: true,
      maxlength: [100, 'El autor no puede tener más de 100 caracteres'],
    },
    isbn: {
      type: String,
      required: [true, 'El ISBN es requerido'],
      unique: true,
      trim: true,
    },
    categoria: {
      type: String,
      required: [true, 'La categoría es requerida'],
      enum: [
        'Ficción',
        'No Ficción',
        'Ciencia',
        'Tecnología',
        'Historia',
        'Biografía',
        'Filosofía',
        'Arte',
        'Poesía',
        'Drama',
        'Infantil',
        'Juvenil',
        'Educación',
        'Referencia',
      ],
    },
    editorial: {
      type: String,
      required: true,
      trim: true,
    },
    anioPublicacion: {
      type: Number,
      required: true,
      min: 1000,
      max: new Date().getFullYear() + 1,
    },
    numeroPaginas: {
      type: Number,
      required: true,
      min: 1,
    },
    idioma: {
      type: String,
      required: true,
      default: 'Español',
      enum: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Otro'],
    },
    disponibles: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    totalCopias: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    prestamos: {
      type: Number,
      default: 0,
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    portada: {
      type: String,
      default: '',
    },
    descripcion: {
      type: String,
      maxlength: [1000, 'La descripción no puede tener más de 1000 caracteres'],
    },
    fechaAdquisicion: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar búsquedas
LibroSchema.index({ titulo: 'text', autor: 'text', descripcion: 'text' });
LibroSchema.index({ categoria: 1 });
LibroSchema.index({ disponibles: 1 });

const Libro: Model<ILibro> = mongoose.models.Libro || mongoose.model<ILibro>('Libro', LibroSchema);

export default Libro;
