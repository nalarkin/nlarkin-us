/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable unused-imports/no-unused-vars */
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBoxOpen } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';

import Layout from '../components/layouts/layout';
import style from './index22.module.scss';

const storyGenBullets = [
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
  'Lorem, ipsum dolor sit amet consectetur',
];

const academicAdvisorBullets = [
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
  'sequi iure molestiae modi magnam illum sapiente, doloribus ex',
];

interface BuildListProps {
  values: string[];
}
const BuildList = ({ values }: BuildListProps) => {
  return (
    <ul>
      {values.map((content, idx) => {
        return <li key={idx}>{content}</li>;
      })}
    </ul>
  );
};

const ResumeTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <Link href="/resume">
          <a>
            <h2 className={style.tileHeader}>My resume</h2>
            <h3 className={style.subtitle}>My resume subtitle is this long</h3>
            <div className={style.body}>
              <BuildList values={academicAdvisorBullets} />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

const StoryGeneratorTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <a
          target="_blank"
          href="https://github.com/nalarkin/story-generator"
          rel="noopener noreferrer"
        >
          <h2 className={style.tileHeader}>Story Generator Project</h2>
          <h3 className={style.subtitle}>My resume subtitle is this long</h3>
          <div className={style.body}>
            <BuildList values={storyGenBullets} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sequi
            iure molestiae modi magnam illum sapiente, doloribus ex rerum ad?
            Soluta iure maxime praesentium mollitia ipsa autem, fugiat tempora
            distinctio?
          </div>
        </a>
      </div>
    </section>
  );
};
const AcademicAdvisorTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <a
          target="_blank"
          href="https://github.com/nalarkin/school_notifier"
          rel="noopener noreferrer"
        >
          <h2 className={style.tileHeader}>Mobile App Academic Advisor</h2>
          <h3 className={style.subtitle}>My resume subtitle is this long</h3>
          <div className={style.body}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sequi
            iure molestiae modi magnam illum sapiente, doloribus ex rerum ad?
            Soluta iure maxime praesentium mollitia ipsa autem, fugiat tempora
            distinctio?
          </div>
        </a>
      </div>
    </section>
  );
};
const CourseRegistationBot = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <a
          target="_blank"
          href="https://github.com/nalarkin/school_notifier"
          rel="noopener noreferrer"
        >
          <h2 className={style.tileHeader}>
            Automated Course Registration Bot
          </h2>
          <h3 className={style.subtitle}>My resume subtitle is this long</h3>
          <div className={style.body}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sequi
            iure molestiae modi magnam illum sapiente, doloribus ex rerum ad?
            Soluta iure maxime praesentium mollitia ipsa autem, fugiat tempora
            distinctio?
          </div>
        </a>
      </div>
    </section>
  );
};
const NewsTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <Link href="/news">
          <a>
            <h2 className={style.tileHeader}>My News Project</h2>
            <h3 className={style.subtitle}>My News project is this long</h3>
            <div className={style.body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              sequi iure molestiae modi magnam illum sapiente, doloribus ex
              rerum ad? Soluta iure maxime praesentium mollitia ipsa autem,
              fugiat tempora distinctio?
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};
const InventorySoftwareTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <Link href="/news">
          <a>
            <h2 className={style.tileHeader}>Inventory Management Software</h2>
            <h3 className={style.subtitle}>My News project is this long</h3>
            <div className={style.body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              sequi iure molestiae modi magnam illum sapiente, doloribus ex
              rerum ad? Soluta iure maxime praesentium mollitia ipsa autem,
              fugiat tempora distinctio?
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

const HomeSEO = {
  description: "Welcome to Nathan Larkin's personal website.",
  title: 'Home',
};

type StaggerProps = {
  children: React.ReactElement[];
  delay: number;
  transitionTime: number;
};

const DirectionalStagger = ({
  children,
  delay,
  transitionTime,
}: StaggerProps) => {
  const variants = {
    show: (i: number) => ({
      opacity: 1,
      // animate: {
      //   pathLength: 1,
      x: 0,
      transition: {
        // easOut: [0.17, 0.8, 0.95, 1],
        // type: spring,
        delay: i * delay,
        duration: transitionTime,
      },
      // duration: 1,
    }),
    hidden: { opacity: 0, x: 500 },
  };

  return (
    <div className="flex justify-center items-center flex-col  gap-7">
      <motion.ul initial="hidden" animate="show">
        {children.map((tile, idx) => {
          return (
            <motion.li
              key={idx}
              // animate={{ x: 0 }}
              // transition={{
              //   type: 'spring',
              //   duration: delay * 2,
              //   delay: delay * idx,
              // }}
              variants={variants}
              custom={idx}
            >
              {tile}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

const ImagePlaceholder = ({ word }: { word: string }) => {
  return <div className="flex flex-col w-full bg-red-500 h-full">{word}</div>;
};

interface ProjectImageProps {
  path: string;
}
const ProjectImage = ({ path }: ProjectImageProps) => {
  return (
    // <div className="flex">
    //   <div className="block">
    // <div className="bg-gradient-to-r from-green-400 to-blue-500">
    // <div className="">
    <Image
      src={path}
      alt=""
      width={500}
      height={500}
      layout="responsive"
      sizes="50vw"
      className={style.itt}

      // className={style.projectImage}
    />
    // </div>
    //   </div>
    // </div>
  );
};
const InventoryIcon = () => {
  return (
    // <div className="flex">
    //   <div className="block">
    <div className="flex">
      <FaBoxOpen size={300} />
    </div>
    //   </div>
    // </div>
  );
};

interface Tile {
  name: string;
  textContent: React.ReactElement;
  image: React.ReactElement;
}
export const allTiles: Tile[] = [
  {
    name: 'news',
    textContent: <NewsTile />,
    image: <ProjectImage path={'/rust_logo.png'} />,
  },
  {
    name: 'inventory',
    textContent: <InventorySoftwareTile />,
    image: <ProjectImage path={'/python.png'} />,
  },

  {
    name: 'story',
    textContent: <StoryGeneratorTile />,
    image: <ProjectImage path={'/rust_logo.png'} />,
  },
  {
    name: 'registration',
    textContent: <CourseRegistationBot />,
    image: <ProjectImage path={'/python.png'} />,
  },
];

const HomeContents = () => {
  // const [activeImage, setActiveImage] = useState(images[0]);
  const [activeTile, setActiveTile] = useState(allTiles[0]);
  return (
    <div className={style.homeContainer}>
      <div className="flex justify-start items-center flex-col md:flex-row gap-7 overflow-x-hidden mb-auto">
        <DirectionalStagger delay={0.3} transitionTime={1.2}>
          {allTiles.map(({ name, textContent, image }) => {
            return (
              <div
                onMouseEnter={() => setActiveTile({ name, textContent, image })}
                key={name}
              >
                {textContent}
              </div>
            );
          })}
        </DirectionalStagger>
      </div>
      <div className={style.imageContainer}>
        {/* <Image
          src="/monitor.svg"
          alt=""
          height={500}
          width={500}
          className="aboslute right-3"
        /> */}

        <div className={style.ittt}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTile ? activeTile.name : 'empty'}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {activeTile.image}
            </motion.div>
          </AnimatePresence>
          <RiComputerLine className={style.laptop} />
        </div>
        <div>yo</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout seo={HomeSEO}>
      <HomeContents />
    </Layout>
  );
};

export default Home;
