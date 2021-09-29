import React, { useState } from 'react';
import style from './Search.module.css';

const SearchBar = () => {
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

  return (
    <div className={style.searchContainer}>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type='text'
          placeholder='SEARCH'
          value={text}
          onChange={handleChange}
        />
        {/* <input className={style.clear} type='reset' placeholder='CLEAR'></input> */}
        <button
          className={style.clear}
          onClick={() => {
            changeText('');
          }}
          disabled={isDisabled()}
        >
          CLEAR
        </button>
      </div>
      <button className={style.btn} disabled={isDisabled()}>
        GO
      </button>
    </div>
  );
};

export default SearchBar;
