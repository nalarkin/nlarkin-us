import React from 'react';

import Link from 'next/link';

import * as Schema from '../../lib/schema';
import { ImageBuilder } from '../shared/ImageBuilder';

type OpinionProps = {
  slug?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  authors: (Pick<Schema.Author, 'name' | 'picture'> & { slug: string })[];
};

const OpinionCard = ({ slug, title, excerpt, authors }: OpinionProps) => {
  return (
    <Link href={`/news/articles/${slug}`}>
      <div className="flex flex-row py-2 font-serif items-baseline ">
        <div className="flex flex-col">
          <div className="text-xs text-gray-600 uppercase mb-1 font-sans font-semibold ">
            {authors[0].name}
          </div>
          <div className="font-semibold text-md">{title}</div>
          <div>{excerpt || null}</div>
        </div>
        <div className="w-12 flex-none mb-auto ml-auto ">
          <ImageBuilder image={authors[0].picture} classes="rounded-full" />
        </div>
      </div>
    </Link>
  );
};

export default OpinionCard;
