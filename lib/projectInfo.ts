export interface Project {
  title: string;
  subtitle: string;
  bullets: string[];
  technologies: string;
  href: string;
}

const storyGenBullets = [
  'Developed a binary executable that generates random sentences based off the user defined rules read from a local text file.',
  'Developed grammar rule validation that prevents endless cycles and unreachable grammar rules by using graph theory.',
  'Implemented Backus-Naur grammar notation as the basis for writing grammar rules.',
  'Created substation documentation for the application.',
  'Key Concepts include: graph theory for validity tests, Backus-Naur form grammar for rules, and graceful error handling.',
];

const academicAdvisorBullets = [
  'Part of team that developed an Android application that was designed to improve communication between parents, students, and teachers.',
  'Private messaging',
  'Secure user signup pipeline',
  'User authentication',
  'Backend database design and implementation',
  'Developed a reddit like messaging board for discussions between application users',
  'Helped develop the local notifications that students and parents could receive for upcoming homework assignments and school events.',
];
const newYorkTimesBullets = [
  'Developed a fully responsive New York Times website clone from scratch.',
  'Website is generated statically using React and Next.js.',
  'Extensive use of SASS for custom responsive style. Tailwind was used for prototyping, but vast majority is styled with SASS.',
  'Developed schema for article, authors, and categories that are stored in a headless content management system (Sanity.io)',
  'When website is statically generated at build time, the content from the headless CMS is used to dynamically generate the website.',
  'Significant use of the unique open-source Sanity.io query language `GROQ`',
  'Highly responsive design. I encourage you to change your browsers width and see the website adapt.',
  'Article Carousels on home page for mobile/tablet viewers',
  'Accordion footer for mobile viewers.',
  'Implemented article searching, for fuzzy matches that include article title, excerpt, and author name.',
];
const inventoryBullets = [
  'Developing a full-stack inventory management website for 30+ GSU graduate researchers.',
  'Application features will include CRUD operations on items in inventory, including renting and returning items, form validation, authentication, authorization, API creation, and RESTful API communication.',
  'Sole person responsible for the front-end development of the application, along with two people who are developing the Django backend.',
  'Developed mobile friendly application which allows QR code scanning to asynchronously fetch data from the backend database and display info about the scanned item.',
  'Initial developed in React, but migrated to Next.js to improve scalability.',
  'Will connect to a django server running on a raspberri pi',
  'Inventory and users data is persisted through a MySQL database.',
  'Estimated initial release Jan 1st, 2022 ??',
];
const registrationBullets = [
  'Developed an application which routinely searches for desired courses at my college and automatically registers for the course when they become available.',
  'Application is implemented through CLI commands and uses browser automation to perform actions while the user is away.',
  'Application can run completely in the background within a terminal. There is no browser window necessary.',
  'Continuously refactored to incorporate various design patterns.',
  'Design patterns were developed using the classic `Design Patterns: Elements of Reusable Object-Oriented Software`',
  'Design patterns include the stategy pattern and subscribe/observe pattern, among others.',
  'During design I stressed the importance of communication through interface abstraction.',
];

export const allProjects: Project[] = [
  {
    title: 'Story Generator',
    subtitle: 'test subtitle',
    technologies: 'Rust, GitHub Pages, Grammar Parse Trees',
    href: 'https://github.com/nalarkin/story-generator',
    bullets: storyGenBullets,
  },
  {
    title: 'Academic Advisor',
    subtitle: 'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
    technologies:
      'Flutter, Dart, NoSQL, Firebase, Authentication, Data Streams',
    href: 'https://github.com/nalarkin/school_notifier',
    bullets: academicAdvisorBullets,
  },
  {
    title: 'Course Registration Bot',
    subtitle: 'Python, Selenium, Sphinx',
    technologies: 'Python, Selenium, Sphinx',
    href: '',
    bullets: registrationBullets,
  },
  {
    title: 'New York Times Clone',
    subtitle:
      'Typescript, React.js, Next.js, Sass, HTML, JavaScript, Sanity.io',
    technologies:
      'Typescript, React.js, Next.js, Sass, HTML, JavaScript, Headless CMS',
    href: '/news',
    bullets: newYorkTimesBullets,
  },
  {
    title: 'Inventory Management Software',
    subtitle:
      'Typescript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Asynchronous data fetching',
    technologies:
      'Typescript, React.js, Next.js, MySQL, Full Stack Development, API Creation, Redux, Async Data Fetching',
    href: '',
    bullets: inventoryBullets,
  },
];
