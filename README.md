# nlarkin.us - Nathan's Personal Website

## TODO:

- Add initialization to search page based on query params. Can't figure out how to intiailze useState with query params, could maybe just declare use state before memo, then call change function with useCallback hook?
- Home page mobile view, make opinion cards lay in column instead of it's own column
- Create Section Header Card with a specific layout
- add tiles with different sizes for the home page and section pages.
- add valid links to header and footer
- Probably add OAuth (github/social sign in) because it's fairly simple and useful to have.
- Idk if NYT has 'author' pages which are dedicated for each author, but I could make that if they do.
- add search feature. Can use fuze fuzzy search or anglio
- update mobile view links to shorter names to match the shorter names in NYT

## Boilerplate Generated During create is below

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
