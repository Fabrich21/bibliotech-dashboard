export interface Libro {
  _id: string;
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
  fechaAdquisicion: string;
  createdAt: string;
  updatedAt: string;
}

export interface Filtros {
  busqueda: string;
  categoria: string;
  idioma: string;
  disponibilidad: 'todos' | 'disponibles' | 'prestados';
  ordenarPor: 'titulo' | 'autor' | 'prestamos' | 'rating' | 'reciente';
  orden: 'asc' | 'desc';
  anioDesde?: number;
  anioHasta?: number;
}

export interface EstadisticasDashboard {
  totalLibros: number;
  totalPrestamos: number;
  librosDisponibles: number;
  categorias: { nombre: string; cantidad: number }[];
  librosMasPrestados: { titulo: string; prestamos: number }[];
  tendenciaPorMes: { mes: string; prestamos: number }[];
  distribuccionIdiomas: { idioma: string; cantidad: number }[];
  ratingPromedio: number;
}
