import React from 'react';
import Layout from '../../components/layouts/layout';

const AboutSEO = {
  description: 'I created this website to do x, y, and z....',
  title: 'About',
};

const About = () => {
  return (
    <div>
      <Layout seo={AboutSEO}>
        <div className='text-center'> about page</div>
      </Layout>
    </div>
  );
};

export default About;
