This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

## Tech

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [SQLite](https://www.sqlite.org/index.html)
- [tRPC](https://trpc.io/)
- [Zod](https://zod.dev/?id=basic-usage)
- [Drizzle-zod](https://orm.drizzle.team/docs/zod)

## Project Structure

- `src/components/` - React components
- `src/app/` - Pages and API routes
- `src/db/` - Database models, migrations and data access objects
- `src/server/` - Server-side code with tRPC routers and server actions
- `src/utils/` - Utility functions shared across client and server
- `src/validations/` - tRPC router validation schemas using zod shared across client and server
