# Star Wars API Project

This project consists of a Next.js frontend and a Node.js backend that interacts with the Star Wars API. It includes a cron job for data synchronization and statistics computation.

## Project Structure

```
.
├── front/               # Next.js frontend application
├── back/               # Node.js backend application
└── docker-compose.yml  # Docker configuration
```

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (if running without Docker)
- Docker and Docker Compose (if running with Docker)

## Running with Docker (Recommended)

The easiest way to run the project is using Docker Compose:

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Start all services:
```bash
docker-compose up --build
```

This will start:
- Frontend (Next.js) on http://localhost:3000
- Backend API on http://localhost:4000
- MongoDB on localhost:27017
- Cron job for data synchronization

## Running without Docker

### Backend Setup

1. Navigate to the backend directory:
```bash
cd back
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the back directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/starwars_api
PORT=4000
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd front
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the front directory with:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

4. Start the frontend development server:
```bash
npm run dev
```

### Running the Cron Job

1. Navigate to the backend directory:
```bash
cd back
```

2. Start the cron job:
```bash
npm run cron
```

## Available Scripts

### Backend

- `npm run dev`: Start the development server
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server
- `npm run cron`: Run the data synchronization cron job

### Frontend

- `npm run dev`: Start the development server
- `npm run build`: Build the production bundle
- `npm start`: Start the production server

## API Endpoints

### People
- `GET /api/people`: Search people
- `GET /api/people/:id`: Get person details

### Films
- `GET /api/films`: Search films
- `GET /api/films/:id`: Get film details

### Stats
- `GET /api/stats`: Get latest statistics

## Development

### Adding New Features

1. Backend:
   - Add new routes in `back/src/routes/`
   - Add corresponding controllers in `back/src/controllers/`
   - Add models if needed in `back/src/models/`

2. Frontend:
   - Add new pages in `front/src/app/`
   - Add components in `front/src/components/`
   - Add utilities in `front/src/utils/`

### Code Style

- Backend uses TypeScript with Express
- Frontend uses Next.js with TypeScript
- Follow atomic design principles for frontend components

## Troubleshooting

### Common Issues

1. MongoDB Connection:
   - Ensure MongoDB is running
   - Check connection string in environment variables

2. API Connection:
   - Verify API URL in frontend environment variables
   - Check if backend server is running

3. Docker Issues:
   - Try rebuilding containers: `docker-compose up --build`
   - Check container logs: `docker-compose logs`