
# Thurston AI Business Council Website

Professional website for the Thurston AI Business Council - Promoting AI education and facilitating registration for the Inaugural AI Business Summit 2026.

## Overview

The Thurston AI Business Council website is a modern, civic-focused platform that serves as the digital presence for a community-led initiative helping local businesses, non-profits, and leaders understand and adapt to AI technology. The site features an intelligent AI assistant powered by Google's Gemini API that can answer questions about the council and facilitate event registration through natural conversation.

## Key Features

- **AI-Powered Assistant**: Interactive chat interface using Google Gemini 2.0 with RAG (Retrieval-Augmented Generation) for accurate, context-aware responses
- **Stripe Payment Integration**: Secure $25 ticket purchases for summit registration
- **Real-time Streaming**: Server-sent events (SSE) for responsive AI interactions
- **User Account System**: Optional accounts for personalized experiences and faster registration
- **Responsive Design**: Mobile-first approach with clean, authoritative civic aesthetic
- **Event Registration**: Streamlined registration flow with payment processing and confirmation
- **Knowledge Base**: Markdown-based content management for easy updates

## Tech Stack

### Frontend
- **React 18+** with TypeScript
- **Vite** for build tooling and development
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **shadcn/ui** components built on Radix UI
- **Tailwind CSS** for styling

### Backend
- **Express** web server
- **PostgreSQL** database via Neon (serverless)
- **Drizzle ORM** for database operations
- **Google Gemini AI** for intelligent assistant
- **Stripe** for payment processing

## Prerequisites

- Node.js 20+ (managed via Replit Nix)
- PostgreSQL database (Neon recommended)
- Google Gemini API key
- Stripe account and API keys

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]

# AI Integration
GEMINI_API_KEY=your_gemini_api_key_here

# Payment Processing
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Replit Deployment (auto-populated on Replit)
REPL_SLUG=your-repl-slug
REPL_OWNER=your-replit-username
```

⚠️ **Never commit the `.env` file to version control!**

## Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/thurston-ai-council.git
cd thurston-ai-council
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your API keys and database credentials

4. **Initialize the database**
```bash
npm run db:push
```

5. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Database Schema

The application uses two main tables:

### Users Table
- `id`: UUID primary key
- `email`: Unique email address
- `password`: Bcrypt hashed password
- `firstName`, `lastName`, `organization`: Profile information
- `emailVerified`: Timestamp of email verification
- `accountStatus`: active, suspended, or deleted
- `createdAt`, `updatedAt`: Timestamps

### Registrations Table
- `id`: UUID primary key
- `userId`: Optional reference to user account
- `firstName`, `lastName`, `email`, `organization`: Registration details
- `paymentStatus`: pending, paid, or scholarship
- `stripePaymentIntentId`, `stripeSessionId`: Stripe payment tracking
- `registeredAt`, `paidAt`: Timestamps

## Project Structure

```
├── client/                 # React frontend
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page components
│       ├── hooks/          # Custom React hooks
│       └── contexts/       # React context providers
├── server/                 # Express backend
│   ├── routes/            # API route handlers
│   └── storage.ts         # Database access layer
├── shared/                 # Shared code between frontend/backend
│   ├── schema.ts          # Drizzle database schema
│   └── knowledge_base/    # Markdown content for AI assistant
└── attached_assets/        # Design documents and resources
```

## AI Assistant Architecture

The Council Assistant uses Google's Gemini 2.0 Flash model with:

1. **RAG (Retrieval-Augmented Generation)**: Knowledge base content loaded from markdown files
2. **Function Calling**: Native Gemini function declarations for registration workflow
3. **Streaming Responses**: Server-sent events for real-time interaction
4. **Context Awareness**: Conversation history maintained for coherent multi-turn dialogues

### Knowledge Base Management

The AI assistant draws from markdown files in `shared/knowledge_base/`:
- `council_mission.md` - Mission and vision
- `summit_details.md` - Event information
- `sponsorship_info.md` - Sponsorship opportunities
- `safety_policy.md` - Privacy and security policies
- `account_management.md` - User account features

To update the assistant's knowledge, edit these files and restart the server.

## Deployment on Replit

This project is optimized for Replit deployment:

1. **Import to Replit**: Use "Import from GitHub" in Replit
2. **Configure Secrets**: Add environment variables in the Secrets tool
3. **Database Setup**: Connect to Neon PostgreSQL or use Replit's built-in database
4. **Deploy**: Click the "Deploy" button to publish to `*.replit.app`

### Production Configuration

The `.replit` file is pre-configured with:
- Build command: `npm run build`
- Run command: `npm run start`
- Port forwarding: 5000 → 80/443

## Stripe Webhook Setup

To handle successful payments, configure a Stripe webhook:

1. Add webhook endpoint: `https://your-domain.replit.app/api/webhooks/stripe`
2. Select event: `checkout.session.completed`
3. Add webhook secret to environment variables

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run check` - Type-check TypeScript
- `npm run db:push` - Push database schema changes

## Design Philosophy

The website follows a **hybrid civic/tech aesthetic**:

- **Authoritative Minimalism**: Clean, purpose-driven design
- **Solid Colors**: No gradients, inspired by government websites
- **Typography**: Inter for body text, IBM Plex Mono for technical elements
- **Accessibility**: WCAG 2.1 AA compliant components

See `design_guidelines.md` for detailed design specifications.

## Security

- Passwords hashed with bcrypt
- Environment variables for sensitive data
- HTTPS enforced in production
- Stripe handles payment data (PCI compliant)
- Session-based authentication with secure cookies

## Contributing

This is a civic initiative project. Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commit messages
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues:
- Email: info@thurstonai.org
- GitHub Issues: [Report a bug](https://github.com/your-username/thurston-ai-council/issues)

## License

[Specify your license here - e.g., MIT License]

## Acknowledgments

- Thurston County community partners
- Google Gemini AI team
- Open source contributors

---

**Built with ❤️ for the Thurston County AI community**
