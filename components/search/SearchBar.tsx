import React, { useState } from 'react';
import style from './Search.module.scss';
import { ImSearch } from 'react-icons/im';
import { useRouter } from 'next/router';

type SearchProps = {
  submit?: () => void;
};

const SearchBar = ({ submit }: SearchProps) => {
  const router = useRouter();
  const [text, changeText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };

  const isDisabled = () => {
    if (text) {
      return false;
    }
    return true;
  };

  const performSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // router.push({
    //   pathname: '/news/search',
    //   query: { all: text },
    // });
    // if (submit !== undefined) {
    //   // submit(text);
    //   router.push({
    //     pathname: '/news/search',
    //     query: { all: text },
    //   });
    // } else {

    if (submit !== undefined) {
      submit();
    }
    router.push({
      pathname: '/news/search',
      query: { all: text },
    });
  };
  //   }
  // };

  return (
    <form className={style.searchContainer} onSubmit={performSearch}>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type='text'
          placeholder='SEARCH'
          value={text}
          onChange={handleChange}
        />
        <button
          type='reset'
          className={style.clear}
          onClick={() => {
            changeText('');
          }}
          disabled={isDisabled()}
        >
          CLEAR
        </button>
      </div>
      <button className={style.btn} type='submit' disabled={isDisabled()}>
        GO
      </button>
    </form>
  );
};

export default SearchBar;
