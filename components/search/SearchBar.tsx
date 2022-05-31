import React, { useState } from 'react';

import { useRouter } from 'next/router';

import style from './Search.module.scss';

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
    if (submit !== undefined) {
      submit();
    }
    router.push({
      pathname: '/news/search',
      query: { all: text },
    });
  };

  return (
    <form className={style.searchContainer} onSubmit={performSearch}>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type="text"
          placeholder="SEARCH"
          value={text}
          onChange={handleChange}
        />
        <button
          type="reset"
          className={style.clear}
          onClick={() => {
            changeText('');
          }}
          disabled={isDisabled()}
        >
          CLEAR
        </button>
      </div>
      <button className={style.btn} type="submit" disabled={isDisabled()}>
        GO
      </button>
    </form>
  );
};

export default SearchBar;
