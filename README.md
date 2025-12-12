# BiblioTech Dashboard

Modern library management system with interactive dashboard built with Next.js 14, MongoDB, and Redux Toolkit.

## Development Team

- **Pablo Cortés**: 20.600.436-3
- **Renata Cuello**: 20.949.079-K
- **Diego Castro**: 18.633.660-7
- **Fabricha Ramírez**: 20.990.386-5

## Features

- Interactive dashboard with 5+ chart types (Bar, Pie, Line, Area, Radar)
- Complete CRUD operations for book management
- Persistent filter system with Redux Toolkit
- MongoDB database with Mongoose ODM
- REST API with Next.js App Router
- Mobile-first responsive design
- Real-time statistics

## Technology Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit with localStorage persistence
- **Database**: MongoDB + Mongoose
- **Charts**: Recharts
- **UI Components**: Shadcn/ui + Lucide React
- **Validation**: Mongoose Schema Validation

## Prerequisites

- Node.js 18.17 or higher
- MongoDB Atlas (free tier) or MongoDB local instance
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone [REPOSITORY_URL]
cd bibliotech-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bibliotech?retryWrites=true&w=majority
```

### 4. Seed the database
```bash
npm run seed
```

This command will create 15 sample books in the database.

### 5. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bibliotech-dashboard/
├── app/
│   ├── api/
│   │   ├── libros/
│   │   │   ├── route.ts          # GET (all), POST (create)
│   │   │   └── [id]/route.ts     # GET, PUT, DELETE (by ID)
│   │   └── estadisticas/
│   │       └── route.ts          # GET dashboard statistics
│   ├── dashboard/
│   │   └── page.tsx              # Dashboard page
│   ├── libros/
│   │   └── page.tsx              # Books catalog
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # Shadcn/ui components
│   └── FiltrosLibros.tsx         # Filters panel
├── lib/
│   ├── mongodb.ts                # MongoDB connection
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── filtrosSlice.ts   # Filters state
│   │   │   └── librosSlice.ts    # Books state
│   │   ├── store.ts              # Redux store
│   │   └── ReduxProvider.tsx     # Provider with persistence
│   └── utils.ts                  # Utilities
├── models/
│   └── Libro.ts                  # Mongoose model
├── scripts/
│   └── seed.ts                   # Database seeding script
└── types/
    ├── index.ts                  # TypeScript types
    └── mongoose.d.ts             # Global Mongoose types
```

## API Endpoints

### Books

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| GET | `/api/libros` | Get all books | `?busqueda=text&categoria=Fiction&idioma=Spanish&disponibilidad=todos&ordenarPor=titulo&orden=asc` |
| POST | `/api/libros` | Create new book | - |
| GET | `/api/libros/[id]` | Get book by ID | - |
| PUT | `/api/libros/[id]` | Update book | - |
| DELETE | `/api/libros/[id]` | Delete book | - |

### Statistics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/estadisticas` | Get all statistics |

**Response Example:**
```json
{
  "totalLibros": 15,
  "librosDisponibles": 45,
  "totalPrestamos": 234,
  "ratingPromedio": 4.5,
  "categorias": [...],
  "distribuccionIdiomas": [...],
  "librosMasPrestados": [...]
}
```

## Data Model

### Book Schema (Mongoose)

```typescript
{
  titulo: string;              // Required
  autor: string;               // Required
  isbn: string;                // Required, unique
  categoria: string;           // Enum: 14 categories
  descripcion?: string;
  portada?: string;            // Image URL
  editorial: string;
  anioPublicacion: number;
  idioma: string;              // Enum: Spanish, English, French, etc.
  numeroPaginas: number;
  disponibles: number;         // Available copies
  totalCopias: number;         // Total copies
  prestamos: number;           // Total loans
  rating: number;              // 0-5
  fechaAdquisicion: Date;
  createdAt: Date;             // Auto-generated
  updatedAt: Date;             // Auto-generated
}
```

## Core Functionalities

### Dashboard
- **Statistics Cards**: Total books, available copies, loans, average rating
- **Bar Chart**: Books distribution by category
- **Pie Chart**: Books by language
- **Line Chart**: Top 10 most borrowed books
- **Area Chart**: Loan trends over time
- **Radar Chart**: Multi-dimensional category analysis

### Books Catalog
- **Search**: By title, author, or description
- **Filters**: Category, language, availability, status
- **Sorting**: By title, author, year, rating, loans
- **Persistence**: Filters are maintained across page reloads

### Redux State Management
- **filtrosSlice**: 8 actions for filter management
- **librosSlice**: 6 actions for CRUD operations
- **Persistence**: Automatic synchronization with localStorage

## Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Seed database
npm run seed
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Add `MONGODB_URI` environment variable
3. Deploy automatically on push

### MongoDB Atlas Setup

1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Configure Network Access (0.0.0.0/0 for development)
3. Create database user with password
4. Copy connection string and update `.env.local`

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

Academic Project - [University Name] - 2025

---

**Note**: This project was developed as part of the coursework for Mobile Application Development.

