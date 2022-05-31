// @ts-nocheck
// need to use nocheck because sanity block content has no typescript support currently
import * as React from 'react';

import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block: (props) => (
      <div className="mb-4 w-full text-xl font-serif">{props.children}</div>
    ),
  },
};

export default function ArticleBody({ text }) {
  return (
    <div className="">
      <BlockContent blocks={text} serializers={serializers} />
    </div>
  );
}
