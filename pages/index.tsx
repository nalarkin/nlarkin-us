import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/layouts/layout';

const HomeContents = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row gap-7">
      <div className="bg-white rounded-lg flex  justify-center">
        <Link href="/resume">
          <a className="p-7 my-auto">Resume</a>
        </Link>
      </div>
      <div className="bg-white rounded-lg flex  justify-center">
        <Link href="/news">
          <a className="p-7 my-auto">News</a>
        </Link>
      </div>
      {/* <Card
        text="Would you like to see my resume?"
        btnText="Resume"
        href="/resume"
      />
      <Card text="Want to see the news?" btnText="news" href="/news" /> */}
    </div>
  );
};

const HomeSEO = {
  description: "Welcome to Nathan Larkin's personal website.",
  title: 'Home',
};

const Home: NextPage = () => {
  return <Layout seo={HomeSEO}> {HomeContents()} </Layout>;
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
