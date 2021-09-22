import React from 'react';
import Layout from '../../components/layout';

const ResumeSEO = {
  description:
    "This page contains Nathan's projects, experiences, and accomplishments.",
  title: "Nathan Larkin's Resume",
};

const Resume = () => {
  return (
    <div>
      <Layout seo={ResumeSEO}>
        <div className='text-center '>this is where I would put my resume</div>
      </Layout>
    </div>
  );
};

export default Resume;
