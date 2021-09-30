import Fuse from 'fuse.js';
import { articleQueryAll, ArticleResultAll } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

type ResultProp = {}[];

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getClient(preview).fetch<ArticleResultAll>(
    articleQueryAll
  );
  return {
    props: {
      data: articles,
    },
  };
};

type SearchProps = {
  data: ArticleResultAll;
};

const Search = ({ data }: SearchProps) => {
  const router = useRouter();
  // const myIndex = Fuse.createIndex(['title', 'author.firstName'], mockData);
  let initialParams = '';
  const options = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['title', 'excerpt', 'authors.name'],
  };
  const fuse = new Fuse(data, options);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };

  const initial = useRef('');
  const initialResult = useRef([]);

  useEffect(() => {
    const params = router.query;
    if (typeof params.text === 'string') {
      initial.current = params.text;
      // @ts-ignore
      initialResult.current = fuse.search(params.text);
    }
    // initiateSearch();
    console.log(params);
  }, [router.query]);
  const [result, changeResult] = useState<ResultProp>(initialResult.current);
  const [text, changeText] = useState(initial.current);

  const initiateSearch = () => {
    changeResult(fuse.search(text));
  };

  if (data === undefined) {
    return <div></div>;
  }

  const writeToFile = () => {
    // fs.writeFile('fuse-index.json', JSON.stringify(myIndex.toJSON()));
    // console.log(JSON.stringify(myIndex.toJSON()));
    console.log(data);
  };

  return (
    <div className=''>
      <div className=''>
        <input
          className=''
          type='text'
          placeholder='SEARCH'
          value={text}
          onChange={handleChange}
        />
        <button
          className=''
          onClick={() => {
            changeText('');
          }}
        >
          CLEAR
        </button>
      </div>
      <button onClick={() => initiateSearch()}>Search for Articles</button>
      {/* <div>
        {data.map((val, idx) => (
          <div key={idx}>{JSON.stringify(val)}</div>
        ))}
      </div> */}
      <div>
        {result.map((val, idx) => (
          <div key={idx}>{JSON.stringify(val)}</div>
        ))}
      </div>
      {/* {JSON.stringify(data)}; */}
    </div>
  );
};

const mockData = [
  {
    title: "Old Man's War",
    author: {
      firstName: 'John',
      lastName: 'Scalzi',
    },
  },
  {
    title: 'The Lock Artist',
    author: {
      firstName: 'Steve',
      lastName: 'Hamilton',
    },
  },
  {
    title: 'HTML5',
    author: {
      firstName: 'Remy',
      lastName: 'Sharp',
    },
  },
  {
    title: 'Right Ho Jeeves',
    author: {
      firstName: 'P.D',
      lastName: 'Woodhouse',
    },
  },
  {
    title: 'The Code of the Wooster',
    author: {
      firstName: 'P.D',
      lastName: 'Woodhouse',
    },
  },
  {
    title: 'Thank You Jeeves',
    author: {
      firstName: 'P.D',
      lastName: 'Woodhouse',
    },
  },
  {
    title: 'The DaVinci Code',
    author: {
      firstName: 'Dan',
      lastName: 'Brown',
    },
  },
  {
    title: 'Angels & Demons',
    author: {
      firstName: 'Dan',
      lastName: 'Brown',
    },
  },
  {
    title: 'The Silmarillion',
    author: {
      firstName: 'J.R.R',
      lastName: 'Tolkien',
    },
  },
  {
    title: 'Syrup',
    author: {
      firstName: 'Max',
      lastName: 'Barry',
    },
  },
  {
    title: 'The Lost Symbol',
    author: {
      firstName: 'Dan',
      lastName: 'Brown',
    },
  },
  {
    title: 'The Book of Lies',
    author: {
      firstName: 'Brad',
      lastName: 'Meltzer',
    },
  },
  {
    title: 'Lamb',
    author: {
      firstName: 'Christopher',
      lastName: 'Moore',
    },
  },
  {
    title: 'Fool',
    author: {
      firstName: 'Christopher',
      lastName: 'Moore',
    },
  },
  {
    title: 'Incompetence',
    author: {
      firstName: 'Rob',
      lastName: 'Grant',
    },
  },
  {
    title: 'Fat',
    author: {
      firstName: 'Rob',
      lastName: 'Grant',
    },
  },
  {
    title: 'Colony',
    author: {
      firstName: 'Rob',
      lastName: 'Grant',
    },
  },
  {
    title: 'Backwards, Red Dwarf',
    author: {
      firstName: 'Rob',
      lastName: 'Grant',
    },
  },
  {
    title: 'The Grand Design',
    author: {
      firstName: 'Stephen',
      lastName: 'Hawking',
    },
  },
  {
    title: 'The Book of Samson',
    author: {
      firstName: 'David',
      lastName: 'Maine',
    },
  },
  {
    title: 'The Preservationist',
    author: {
      firstName: 'David',
      lastName: 'Maine',
    },
  },
  {
    title: 'Fallen',
    author: {
      firstName: 'David',
      lastName: 'Maine',
    },
  },
  {
    title: 'Monster 1959',
    author: {
      firstName: 'David',
      lastName: 'Maine',
    },
  },
];

export default Search;
