import React from 'react';

import { render } from '@testing-library/react';
import type { AppProps } from 'next/app';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context.shared-runtime';
import { NextSeo } from 'next-seo';

import { SEO } from 'appConfig';
import MyApp from 'pages/_app';

it('keeps SEO defaults with a custom layout and allows page overrides', () => {
  function Page() {
    return <NextSeo title="Example page" description="Page description" />;
  }
  Page.getLayout = (page: React.ReactElement) => <main>{page}</main>;
  let head: React.ReactElement<Record<string, unknown>>[] = [];
  const { container } = render(
    <HeadManagerContext.Provider
      value={{
        mountedInstances: new Set(),
        updateHead: (elements) => {
          head = elements;
        },
        updateScripts: () => {},
        scripts: {},
        getIsSsr: () => true,
      }}
    >
      <MyApp
        Component={Page}
        pageProps={{}}
        router={{} as AppProps['router']}
      />
    </HeadManagerContext.Provider>
  );
  expect(container.querySelector('main')).toBeInTheDocument();
  expect(
    head.find((element) => element.props.property === 'og:site_name')?.props
      .content
  ).toBe(SEO.openGraph.site_name);
  expect(
    head.find((element) => element.props.name === 'description')?.props.content
  ).toBe('Page description');
  expect(head.find((element) => element.type === 'title')?.props.children).toBe(
    'Example page | nlarkin.us'
  );
});
