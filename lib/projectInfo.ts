export interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  buttonText: string;
  technologies: string;
  href: string;
}

export interface ProjectSummary {
  title: string;
  image: React.ReactElement;
  slug: string;
  bullets: string[];
  href: string;
  buttonText: string;
  technologies: string;
}

export const storyGenBullets = [
  'Developed a binary executable that generates random sentences based off the user defined rules',
  'Developed grammar rule validation that prevents endless cycles and unreachable grammar rules by using graph theory',
  'Grammar rules are parsed from a local text file the user specifies',
  'Grammar rule notation was based of Backus-Naur grammar notation',
  'Created substantial documentation for the application',
  'Implemented graceful error handling, including program exit if endless cycle is detected, and a warning message if unreachable grammar rules exist',
  'Program is written in Rust',
];

export const academicAdvisorBullets = [
  'Part of team that developed an Android app which aimed to improve communication between students, parents, and teachers',
  'Designed and implemented private messaging, message read receipts, and secure user signup pipeline',
  'This is the only project in my portfolio that was developed as a school project',
  'Designed and implemented secure user signup pipeline',
  'Created login process using Firebase authentication',
  'Backend database design and implementation',
  'Implemented most state management using an industry standard library named `bloc`',
  'Developed a reddit like messaging board for discussions between application users',
  'Helped develop the local notifications that students and parents could receive for upcoming homework assignments and school events',
];
export const newYorkTimesBullets = [
  'Developed a fully responsive New York Times website clone from scratch',
  'Website is generated statically using React and Next.js',
  'Developed schema for article, authors, and categories that are stored in a headless content management system (Sanity.io)',
  'Implemented searching for website that matches article title, excerpt, and author name',
  'Extensive use of SASS for custom responsive style. Tailwind was used for prototyping, but vast majority is styled with SASS',
  'When website is statically generated at build time, the content from the headless CMS is used to dynamically generate the website',
  'Significant use of the unique open-source Sanity.io query language `GROQ`',
  "Highly responsive design. I encourage you to change your browser's width and see the website adapt",
  'Created article carousels on home page for mobile/tablet viewers',
  'Created an accordion footer for mobile viewers',
];
export const inventoryBullets = [
  'Developing a full-stack inventory management website that will serve over 30 GSU researchers',
  'Designed and implemented all critical back-end features of the custom REST API',
  'Built the front-end features for item rental, user authentication, CRUD operations, QR code generation, and exporting data into Excel spreadsheets',
  'Sole person responsible for the front-end development of the application',
  'Developed mobile friendly application which allows QR code scanning to asynchronously fetch data from the backend database and display info about the scanned item',
  'Initial developed in React, but migrated to Next.js to improve scalability, improved routing, and time to first load',
  'The custom back-end was created with Express.js using TypeScript',
  'Back-end server features secure password storage by hashing passwords via argon2id',
  'User login state is persisted in stateless manner using JSON Web Tokens.',
  'Inventory and users data is persisted through a MySQL database',
  'Application will be deployed on a Raspberry Pi local web server',
  'Estimated initial release January 2022',
  'Currently unable to release full source code, but I do have an early alpha version of the backend server I created for this project',
];
export const registrationBullets = [
  'Developed a Python application which routinely searches for desired college courses and registers when a course becomes available',
  'Application is implemented through CLI commands and uses browser automation to perform searches',
  'Application can run completely in the background within a terminal. There is no browser window necessary',
  'Refactored the code to incorporate various design patterns, such as the strategy pattern and subscribe/observe pattern, among others',
  'Design patterns were developed using the classic `Design Patterns: Elements of Reusable Object-Oriented Software`',
  'During design I stressed the importance of communication through interface abstraction to improve the reusability, extensibility, and maintainability',
];
export const registrationBulletsSummary = registrationBullets.slice(0, 2);
export const inventoryBulletsSummary = inventoryBullets.slice(0, 3);
export const newYorkTimesBulletsSummary = newYorkTimesBullets.slice(0, 3);
export const academicAdvisorBulletsSummary = academicAdvisorBullets.slice(0, 3);
export const storyGenBulletsSummary = storyGenBullets.slice(0, 3);

export const GITHUB_BUTTON_TEXT = 'See on GitHub';
// const PRIVATE_BUTTON_TEXT = 'Private Code';

export const allProjects: Project[] = [
  {
    title: 'Story Generator',
    subtitle: 'test subtitle',
    technologies: 'Rust, GitHub Pages, Grammar Parse Trees',
    href: 'https://github.com/nalarkin/story-generator',
    buttonText: GITHUB_BUTTON_TEXT,
    bullets: storyGenBullets,
  },
  {
    title: 'Academic Advisor',
    subtitle: 'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
    technologies:
      'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
    href: 'https://github.com/nalarkin/school_notifier',
    buttonText: GITHUB_BUTTON_TEXT,
    bullets: academicAdvisorBullets,
  },
  {
    title: 'Course Registration Bot',
    subtitle: 'Python, Selenium, Sphinx',
    technologies: 'Python, Selenium, Sphinx',
    href: '',
    buttonText: 'See Video Demo',
    bullets: registrationBullets,
  },
  {
    title: 'New York Times Clone',
    subtitle:
      'TypeScript, React.js, Next.js, Sass, HTML, JavaScript, Sanity.io',
    technologies:
      'TypeScript, React.js, Next.js, Sass, HTML, JavaScript, Headless CMS',
    href: '/news',
    buttonText: 'View Website',
    bullets: newYorkTimesBullets,
  },
  {
    title: 'Inventory Management Software',
    subtitle:
      'TypeScript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Asynchronous data fetching',
    technologies:
      'TypeScript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Async Data Fetching',
    href: '',
    buttonText: GITHUB_BUTTON_TEXT,
    bullets: inventoryBullets,
  },
];
