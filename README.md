# IncuTrack Pro - Startup CRM

A comprehensive CRM system designed for startup incubators and accelerators to track KPIs, manage startups, and monitor progress.

## Features

- **Dashboard**: Get a high-level overview of all startups and their key metrics
- **Startup Management**: Track and manage all startups in your portfolio
- **KPI Tracking**: Define, monitor, and analyze key performance indicators
- **User Management**: Manage different user roles with appropriate permissions
- **Document Management**: Store and share important documents
- **Reporting**: Generate detailed reports on startup performance

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, React Query
- **State Management**: React Context API, Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/incutrack-pro.git
   cd incutrack-pro
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local` and adjust values as needed

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
incutrack-pro/
│
├── public/                      # Static assets
│
├── src/                         # Source code
│   ├── api/                     # API integration
│   ├── assets/                  # Assets (images, styles)
│   ├── components/              # Shared components
│   ├── contexts/                # React context providers
│   ├── features/                # Feature-based organization
│   ├── hooks/                   # Custom hooks
│   ├── lib/                     # Shared libraries
│   ├── routes/                  # Routing
│   ├── utils/                   # Utility functions
│   ├── config/                  # Configuration
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Entry point
│
├── .env                         # Default environment variables
├── .env.development             # Development variables
└── package.json                 # Dependencies and scripts
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query)
