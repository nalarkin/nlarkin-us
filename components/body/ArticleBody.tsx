import * as React from 'react';

import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';

import { ImageBuilder } from 'components/shared/ImageBuilder';
import type { Article, ArticleImage } from 'lib/schema';

const components: PortableTextComponents = {
  block: ({ children }: { children?: React.ReactNode }) => (
    <div className="mb-4 w-full text-xl font-serif">{children}</div>
  ),
  types: {
    image: ({ value }: { value: ArticleImage }) => (
      <ImageBuilder image={value} />
    ),
  },
};

export default function ArticleBody({ text = [] }: { text?: Article['text'] }) {
  return (
    <div>
      <PortableText value={text} components={components} />
    </div>
  );
}
