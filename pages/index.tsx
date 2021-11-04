/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Layout from '../components/layouts/layout';
import style from './index.module.scss';

const ResumeTile = () => {
  return (
    <section className={style.tileContainer}>
      <div className={style.cardText}>
        <Link href="/resume">
          <a>
            <h2 className={style.tileHeader}>My resume</h2>
            <h3 className={style.subtitle}>My resume subtitle is this long</h3>
            <div className={style.body}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              sequi iure molestiae modi magnam illum sapiente, doloribus ex
              rerum ad? Soluta iure maxime praesentium mollitia ipsa autem,
              fugiat tempora distinctio?
            </div>
          </a>
        </Link>
      </div>
      <div className={style.cardImage}></div>
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
      <div className={style.cardImage}></div>
    </section>
  );
};

const HomeSEO = {
  description: "Welcome to Nathan Larkin's personal website.",
  title: 'Home',
};

const container = {
  show: {
    opacity: 1,
    // animation: { x: 100 },
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     animate: { x: 100 },
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

type StaggerProps = {
  children: React.ReactChild[];
  delay: number;
  transitionTime: number;
};

const DirectionalStagger = ({
  children,
  delay,
  transitionTime,
}: StaggerProps) => {
  // const stagger = {
  //   show: {
  //     opacity: 1,
  //     // animation: { x: 100 },
  //     // animate: { x: 500 },
  //     transition: {
  //       // when: 'beforeChildren',
  //       // staggerChildren: delay * 9,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     // transition: {
  //     //   when: 'afterChildren',
  //     // },
  //   },
  // };
  const variants = {
    show: (i: number) => ({
      opacity: 1,
      // animate: {
      //   pathLength: 1,
      x: 0,
      // },
      // x: {
      //   0,
      //   // type: 'spring',
      //   // stiffness: 100,
      //   // delay: i * delay,
      //   // duration: transitionTime,
      // },
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

const HomeContents = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-7 overflow-x-hidden">
      <DirectionalStagger delay={0.7} transitionTime={1.2}>
        <ResumeTile />
        <NewsTile />
        <ResumeTile />
        <NewsTile />
        <ResumeTile />
      </DirectionalStagger>
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

// const BackgroundImage = () => {
//   return (
//     <Image
//       src='/images/hero-image.webp'
//       alt='background'
//       layout='fill'
//       objectFit='fill'
//       objectPosition='center'
//       // width={1600}
//       // height={1067}
//     />
//   );
// };

// const Home: NextPage = () => {
//   return (
//     <div id='hero-image' className=''>
//       <div className=''>
//         <BackgroundImage />
//       </div>
//       <nav className='flex flex-row flex-auto text-center justify-between py-5 px-5 text-2xl relative '>
//         <div>Nathan&apos;s website</div>
//         <Link href='/info'> How I made this site.</Link>
//       </nav>
//       <div className='h-4/5 relative'>strsts</div>
//       <main className='flex flex-row items-center justify-center flex-auto relative min-h-screen self-center z-0'>
//         {/* <main className='fixed justify-center items-center flex '> */}
//         {/* <div className='flex flex-col md:flex-row   flex-auto justify-around bg-green-500 '> */}
//         <div className='flex flex-col flex-auto w-full h-full'>
//           <div className='flex flex-row flex-auto justify-around  '>
//             <div className='flex flex-col  md:flex-row md:flex-justify-between mt-10 gap-6 mx-3 bg-purple-500'>
//               <div className='hero-card'>
//                 <h2 className='text-center'>
//                   ResumeResumeResumeResume Resume Resume Resume Resume Resume
//                   Resume Resume Resume Resume Resume Resume
//                   ResumeResumeResumeResume
//                 </h2>
//                 <BsPersonLinesFill size={150} className='text-blue-800' />
//                 <div className='mt-auto'>
//                   <Link href='/resume'>
//                     <a className='btn-blue'>See my resume</a>
//                   </Link>
//                 </div>
//               </div>
//               <div className='hero-card'>
//                 <div className='text-center '>
//                   go to newsgo to news go to news go to news go to news go to
//                   news go to news go to news go to news go to news go to news go
//                   to news go to news
//                 </div>
//                 <FaRegNewspaper size={150} className='text-blue-800 ' />
//                 <div className='mt-auto'>
//                   <Link href='/news'>
//                     <a className='btn-blue'>See my resume</a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const backgroundImage = <style jsx>{``}</style>;

export default Home;
