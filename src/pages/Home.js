import React, { useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';

export const Home = () => {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    // ev object

    setInput(ev.target.value);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keycode === 13) {
      onSearch();
    } // console.log(ev.keycode);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        {' '}
        Search
      </button>
    </MainPageLayout>
  );
  // whatever goes inside this tag will be a part of mainpagelayout
  // we have used children property in that
  // value prop inside input element is to directly associate input state with the input element.
};
