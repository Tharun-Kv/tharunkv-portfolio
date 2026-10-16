This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Jeo portfolio assistant

Jeo sends questions and a small set of relevant portfolio notes to Gemini through a Netlify Function. The function uses the official Google Gen AI SDK and Gemini 2.5 Flash. Credentials stay on the server and must never use a `NEXT_PUBLIC_` prefix. Netlify AI Gateway can provide credentials automatically; an existing `GEMINI_API_KEY` uses your own Google account instead.

For local development, copy `.env.example` to `.env.local`, set `GEMINI_API_KEY`, then run `npm run dev`. This starts Netlify Dev and the Next.js site together.

For a deployed Netlify site, add `GEMINI_API_KEY` in **Project configuration → Environment variables** and enable the **Functions** scope, then redeploy. Rotate any key shared in a chat or public location before using it.

The static site has a single assistant endpoint, `/api/assistant`, served by `netlify/functions/assistant.mts`. Use Netlify Dev to run this endpoint locally; `next dev` alone does not serve Netlify Functions. If generation fails, Jeo returns relevant portfolio notes and logs only a safe status code for diagnosis.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
