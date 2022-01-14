---
title: New York Times Clone
description: A fully responsive New York Times website clone built from scratch.
technologies: TypeScript, React.js, Next.js, Sass, HTML, JavaScript, Headless CMS
github: https://github.com/nalarkin/nlarkin-us
imageSrc: /nextjs-cover.webp
imageAlt: next js icon
order: 2
extraButtonHrefs: https://www.nlarkin.us/news
extraButtonText: View Site
omitFromHome: false
---

- Developed a fully responsive New York Times website clone from scratch
- Website is generated statically using React and Next.js
- Developed schema for article, authors, and categories that are stored in a headless content management system (Sanity.io)
- Implemented searching for website that matches article title, excerpt, and author name
- Extensive use of SASS for custom responsive style. Tailwind was used for prototyping, but vast majority is styled with SASS
- When website is statically generated at build time, the content from the headless CMS is used to dynamically generate the website
- Significant use of the unique open-source Sanity.io query language `GROQ`
- Highly responsive design. I encourage you to change your browser's width and see the website adapt
- Created article carousels on home page for mobile/tablet viewers
- Created an accordion footer for mobile viewers
