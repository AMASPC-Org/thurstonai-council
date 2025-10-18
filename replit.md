# Thurston AI Business Council Website

## Overview

The Thurston AI Business Council website is a professional, civic-focused platform designed to promote and facilitate registration for the inaugural AI Business Summit in Thurston County. The site serves as the primary digital presence for a community-led initiative helping local businesses, non-profits, and leaders understand and adapt to AI technology.

The application is built as a modern single-page application (SPA) with a React frontend and Express backend, featuring a clean, authoritative design that balances government-style credibility with contemporary tech aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented using Wouter, a lightweight React router. The application features four main pages:
- Home (`/`) - Hero section with call-to-action and council overview
- About (`/about`) - Mission statement and founding partner information
- Summit (`/summit`) - Event details, agenda, and registration form
- Get Involved (`/get-involved`) - Sponsorship and speaker opportunities

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible, customizable React components. The design system uses a "new-york" style variant with custom Tailwind configuration.

**Design System**: 
- **Color Philosophy**: Hybrid civic/tech aesthetic using solid colors only (no gradients)
- **Primary Colors**: Deep Tech Blue (216 82% 28%), Charcoal (220 13% 18%), Crisp White
- **Typography**: Inter font family for headings and body text, IBM Plex Mono for technical elements
- **Layout**: Responsive grid system with consistent spacing primitives (Tailwind units)
- **Visual Identity**: Custom SVG logo combining civic elements (Capitol dome) with tech elements (circuit patterns) and local landmarks (Mount Rainier silhouette)

**State Management**: 
- TanStack Query (React Query) for server state management and API interactions
- React hooks for local component state
- Custom toast system for user notifications

**Form Handling**: React Hook Form with Zod schema validation for type-safe form submissions.

### Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript, using ES modules.

**API Design**: RESTful endpoints with JSON request/response format:
- `POST /api/register` - Creates new summit registrations with validation
- Email uniqueness validation prevents duplicate registrations
- Structured error responses with appropriate HTTP status codes

**Development vs Production**:
- Development mode uses Vite middleware for hot module replacement (HMR)
- Production mode serves pre-built static assets from `/dist/public`
- Custom logging middleware tracks API request duration and response data

**Session Management**: Uses connect-pg-simple for PostgreSQL-backed session storage (configured but not actively used in current implementation).

### Data Storage

**Database**: PostgreSQL accessed via Neon serverless driver (@neondatabase/serverless).

**ORM**: Drizzle ORM for type-safe database operations with schema-first approach:
- Schema defined in `shared/schema.ts` for isomorphic type safety
- Migrations stored in `/migrations` directory
- Zod schemas auto-generated from Drizzle schemas for runtime validation

**Schema Design**:
- `users` table - Basic user authentication structure (placeholder for future use)
- `registrations` table - Summit registration data with fields:
  - `id` (UUID primary key)
  - `firstName`, `lastName`, `email` (required text fields)
  - `organization` (required text)
  - `registeredAt` (timestamp with default)
  - Email field has unique constraint

**Storage Abstraction**: Implements IStorage interface pattern with in-memory fallback (MemStorage) for development/testing, allowing easy swap to database implementation.

### Build System

**Development**: 
- Vite dev server with HMR on port 5000 (proxied to frontend)
- tsx for TypeScript execution in Node.js
- Concurrent frontend and backend development servers

**Production Build**:
1. Frontend: Vite bundles React app to `dist/public`
2. Backend: esbuild bundles server code to `dist/index.js` as ESM module
3. Node serves pre-built assets with Express serving as the static file server

**TypeScript Configuration**: Strict mode enabled with path aliases:
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*` (for isomorphic code)
- `@assets/*` maps to `attached_assets/*`

### Authentication & Authorization

Currently implements a basic user schema but does not have active authentication flows. The registration system is open (no login required) but validates email uniqueness to prevent duplicate registrations.

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle Kit**: Database migration tool and schema management

### UI Framework
- **Radix UI**: Accessible component primitives (@radix-ui/* packages)
- **shadcn/ui**: Pre-built component library built on Radix
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library

### Frontend Libraries
- **React**: UI framework (v18+)
- **Wouter**: Lightweight client-side router
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type inference
- **date-fns**: Date manipulation and formatting

### Backend Libraries
- **Express**: Web server framework
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and dev server with plugins:
  - @vitejs/plugin-react for React support
  - @replit/vite-plugin-runtime-error-modal for error overlay
  - @replit/vite-plugin-cartographer (Replit-specific)
  - @replit/vite-plugin-dev-banner (Replit-specific)
- **TypeScript**: Type safety across the stack
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production bundler for server code

### Fonts
- **Google Fonts**: Inter (400, 500, 600, 700, 800) and IBM Plex Mono (500)