---
title: Inventory Management Software
description: A full-stack inventory management application for 30+ GSU graduate researchers.
technologies: Express.js, TypeScript, Next.js, React.js, MySQL, Full Stack Development, API Creation, Redux, asynchronous data fetching
github: https://github.com/nalarkin/prisma-morse
imageSrc: /gsu_mini.png
imageAlt: gsu logo
order: 1
---

- Developing a full-stack inventory management website that will serve over 30 GSU researchers
- Designed and implemented all critical back-end features of the custom REST API
- Built the front-end features for item rental, user authentication, CRUD operations, QR code generation, and exporting data into Excel spreadsheets
- Sole person responsible for the front-end development of the application
- Developed mobile friendly application which allows QR code scanning to asynchronously fetch data from the backend database and display info about the scanned item
- Initial developed in React, but migrated to Next.js to improve scalability, improved routing, and time to first load
- The custom back-end was created with Express.js using TypeScript
- Back-end server features secure password storage by hashing passwords via argon2id
- User login state is persisted in stateless manner using JSON Web Tokens.
- Inventory and users data is persisted through a MySQL database
- Application will be deployed on a Raspberry Pi local web server
- Estimated initial release January 2022
- Currently unable to release full source code, but I do have an early alpha version of the backend server I created for this project
