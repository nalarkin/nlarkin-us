# nlarkin.us - Nathan's Personal Website

## TODO

1. Change home page to not reuse the same 5 articles, and instead us all articles on the page (now that I have enough)
2. Change article page title format (I think title should appear above image, in addition to the excerpt?)
3. Check sections not meeting minimum article count

## FYI

- There won't be a lot of documentation because the website is only intended to be interacted with through the browser.
- Also there is probably a lot of dead code in the components folder. It's not a high priority for me to remove this, as the unused code gets removed at build time.
- The main branch of this GitHub repository is what gets deployed to https://www.nlarkin.us (deployed through Varcel).

## Things that were difficult

- Matching the exact behavior of the NYT when it resized was difficult, order would frequently change, and there were many stages to each layout.
  - If I had more time I would have copied more layouts to add more variety to my site.
- Using conditional CSS was new for me, such as `.container:not(:first-child)::before {...}`
  - Using this is how the majority of the NYT achieves it's dividers
- Carousels were a big pain to style because the packages on `npm` offer very little styling control and have hidden implementation details that made it difficult to utilize CSS flexbox.
- Implementing the search initial page load after the search was difficult with fuse.js
  - It was easy to load the component with fuse.js and users could search, but when I transition to a new page, I had difficulty getting the results to to display.
  - Solved using the hook useEffect with a useCallback hook to update the state on load.
- Sanity.io was very time consuming to setup.
  - Getting Rich text was difficult, ran into numerous issues. Turns out their example blog project was causing the issue! _Arggg_
  - Getting the statically generated content at build time was a little difficult, mainly because this was my first time using Next.js
  - The `GROQ` query language used for querying data had a learning curve. It does have some cool features.
