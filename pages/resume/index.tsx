import React from 'react';

import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { NextSeo } from 'next-seo';

// import resume from '/public/Nathan_Larkin_Resume.pdf';
import Layout from '../../components/layouts/layout';
import style from './index.module.scss';

const resumeSeo = {
  description:
    "This page contains Nathan's projects, experiences, and accomplishments.",
  title: "Nathan Larkin's Resume",
};

const Resume = () => {
  return (
    <>
      <NextSeo {...resumeSeo} />
      <Container maxWidth="md">
        <Paper sx={{ p: 3 }} className={style.list}>
          {/* <Stack alignItems="center"> */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign={'center'}
          >
            NATHAN LARKIN
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            <div className="ml-2">Atlanta, GA</div>
            <div>P: 704-533-4302</div>
            <a
              href="mailto:nlarkin1@student.gsu.edu"
              target="_blank"
              rel="noreferrer"
            >
              nlarkin1@student.gsu.edu
            </a>
            <a
              href="http://www.linkedin.com/in/nalarkin"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/nalarkin
            </a>
            <a href="https://nlarkin.us/" target="_blank" rel="noreferrer">
              Portfolio Website: https://nlarkin.us
            </a>
            <div>
              <a
                href="https://github.com/nalarkin"
                className="s3"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/nalarkin
              </a>
            </div>
          </Stack>
          <Typography variant="h6" component="h2">
            SUMMARY
          </Typography>
          <Divider sx={{ borderColor: 'black' }} />
          <Typography variant="body2" paragraph sx={{ mt: 0.5 }}>
            I discovered my love for computer science during my junior year at
            the University of Washington. Unfortunately, it was too late for me
            to gain admission to the UW CS program, and my family had relocated
            to GA. Instead of staying at UW and earning a non-CS degree, my
            passion led me to relocate to GA and pursue a formal CS education. I
            flourished in the CS program at GSU and graduated summa cum laude in
            May 2022. In my free time, I am constantly learning new CS skills,
            best practices, and new technologies. Solving complex problems is a
            space where I thrive.
          </Typography>
          <Typography variant="h6" component="h2">
            EDUCATION
          </Typography>
          <Divider sx={{ borderColor: 'black' }} />
          <Stack
            direction="row"
            justifyContent={'space-between'}
            sx={{ mt: 0.5 }}
          >
            <Typography component="h3" fontSize={'1rem'} fontWeight={500}>
              Georgia State University
            </Typography>
            <i>Atlanta, GA</i>
          </Stack>
          <Stack direction="row" justifyContent={'space-between'}>
            <i>Bachelor of Science in Computer Science</i>
            <i className="text-right">June 2020 - May 2022</i>
          </Stack>

          <ul>
            <li>
              <p>
                Graduated <i>summa cum laude</i>
              </p>
            </li>
            <li>
              <p className="bulletList">4.16 GPA on 4.30 scale (institution)</p>
            </li>
            <li>
              <p>4.25 GPA on 4.30 scale (CS department)</p>
            </li>
          </ul>
          <ul>
            <Stack direction="row" justifyContent={'space-between'} mt={1}>
              <Typography component="h3" fontSize={'1rem'} fontWeight={500}>
                University of Washington
              </Typography>
              <i>Seattle, WA</i>
            </Stack>
            <Stack direction="row" justifyContent={'space-between'}>
              <i>Undeclared Major</i>
              <i className="text-right">Jan. 2015 - Jan. 2018</i>
            </Stack>

            <li>
              <p>2017 Foster School of Business Case Competition Finalist</p>
            </li>
            <li>
              Team leader of the group that made it to the final round of the
              competition
            </li>
            <li>
              <p>Transferred to GSU to pursue CS degree</p>
            </li>
          </ul>
          <Typography variant="h6" component="h2">
            SKILLS
          </Typography>
          <Divider sx={{ borderColor: 'black' }} />
          <h3 className="mt-1">
            <strong>Proficient Languages</strong>: Python, TypeScript, Rust,
            Dart, Java, JavaScript, HTML/CSS
          </h3>
          <h3>
            <strong>Basic Understanding</strong>: C, Hadoop, Spark, SQL, Shell
            Script, Assembly, Redux
          </h3>
          <h3>
            <strong>Proficient Technologies</strong>: React.js, Next.js, Sass,
            Firebase, Flutter, GIT, Linux, NoSQL Databases, Express.js
          </h3>
          <Typography variant="h6" component="h2">
            PERSONAL PROJECTS
          </Typography>
          <Divider sx={{ borderColor: 'black' }} />

          <Typography
            component="h3"
            fontSize={'1rem'}
            fontWeight={500}
            sx={{ mt: 0.5 }}
          >
            Full Stack Inventory Management Application for 30+ GSU Researchers
            at Morse Laboratory
          </Typography>
          <ul>
            <li>
              <p>
                This application tracks research items and supplies, provides
                rental service features, user authentication, role-based
                permissions, item searching, multiple data views, and user
                action history
              </p>
            </li>
            <li>
              <p>
                Designed and created a custom REST API, all backend features,
                and managed a MySQL database for persistent data storage
              </p>
            </li>
            <li>
              <p>
                Sole person responsible for the front-end development of the
                application
              </p>
            </li>
            <li>
              <p>
                Built the frontend features for item rental, user
                authentication, CRUD operations, QR code generation
              </p>
            </li>
            <li>
              <p>
                Deployed the first release of the application on a Raspberry Pi
                local web server on February 17th, 2022
              </p>
            </li>
            <Typography component="h3" fontSize={'1rem'} fontWeight={500}>
              New York Times Website Clone
            </Typography>
          </ul>
          <ul>
            <li>
              <p>
                Created a fully responsive New York Times website clone from
                scratch{' '}
                <a
                  href="https://nlarkin.us/projects/nyt-clone"
                  className="a"
                  target="_blank"
                  rel="noreferrer"
                >
                  (
                </a>
                <span className="s7">
                  https://nlarkin.us/projects/nyt-clone)
                </span>
              </p>
            </li>
            <li>
              <p>
                Incorporated a Headless CMS and designed schema to store the
                articles, authors, and categories
              </p>
            </li>
            <li>
              <p>
                Leveraged Next.js to optimize performance by using static
                generation to create HTML at build time
              </p>
            </li>
            <Typography component="h3" fontSize={'1rem'} fontWeight={500}>
              Course Registration Bot
            </Typography>
          </ul>
          <ul>
            <li>
              <p>
                Developed a Python application which routinely searches for
                desired college courses and registers when a course becomes
                available
              </p>
            </li>
            <li>
              <p>Refactored the code to incorporate various design patterns</p>
            </li>
            <li>
              <p>
                Video demo available on my portfolio website{' '}
                <a
                  href="https://nlarkin.us/projects/course-bot"
                  className="a"
                  target="_blank"
                  rel="noreferrer"
                >
                  (
                </a>
                <span className="s7">
                  https://nlarkin.us/projects/course-bot)
                </span>
              </p>
            </li>
          </ul>
          <Typography component="h3" fontSize={'1rem'} fontWeight={500}>
            Story Generator
          </Typography>
          <ul>
            <li>
              <p>
                Constructed a Rust program that generates random sentences based
                on user defined grammar rules
              </p>
            </li>
            <li>
              <p>
                Designed and implemented validation of the provided grammar
                rules using graph theory to detect guaranteed endless cycles and
                unreachable grammar rules
              </p>
            </li>
          </ul>
        </Paper>
        <Stack>
          <Button
            variant="contained"
            href="Nathan_Larkin_Resume.pdf"
            download
            sx={{ mx: 'auto', mt: 5 }}
          >
            {'Download Résumé'}
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Resume;

Resume.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
