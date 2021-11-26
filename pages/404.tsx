import React from 'react';

import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import SectionLayout from 'components/layouts/SectionLayout';
import { SectionResultAll, sectionsQueryAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import { buildSectionSlug } from 'lib/utils';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const sections = await getClient(preview).fetch<SectionResultAll>(
    sectionsQueryAll
  );

  return {
    props: {
      sections,
    },
  };
};
interface SectionRowProps {
  title: string;
  slug: string;
}

const SectionRow = ({ title, slug }: SectionRowProps) => {
  return (
    <Link href={buildSectionSlug(slug)}>
      <a className="flex hover:bg-gray-200 p-2">{title}</a>
    </Link>
  );
};

const Custom404 = ({
  sections,
}: {
  sections: SectionResultAll | undefined;
}) => {
  if (sections === undefined) {
    return <div></div>;
  }
  return (
    <>
      <NextSeo title="404" description="Unknown Page" />
      <div className="flex flex-col pt-7 px-8 ">
        <h1 className="bold text-6xl text-center">404 Error</h1>
        <h2 className=" text-3xl text-center mt-3">Page not found</h2>
        <p className="mt-5 text-lg">
          If you are seeing this, it&apos;s probably because I didn&apos;t add
          this article category (despite there being a link in the footer).
        </p>
        <p className="mt-5 text-lg">
          As you can guess, the NYT has many, many article categories.
        </p>
        <p className="mt-5 text-lg">
          Creating the missing 30+ additional article categories would be very
          tedios and provide no educational value. Currently I do not plan on
          adding more sections.
        </p>
        <h3 className="text-2xl font-semibold text-center mt-5">
          Existing Article Categories
        </h3>
        <div className="divide-y-2">
          {sections.map(({ _id, title, slug }) => {
            return (
              <div key={_id}>
                <SectionRow title={title ?? ''} slug={slug} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <SectionLayout sectionTitle={'404'} slug={'/news'}>
      {page}
    </SectionLayout>
  );
};
