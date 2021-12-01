import React, { useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

export const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const onInputChange = ev => {
    // ev object

    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      // https://api.tvmaze.com/search/shows?q=men

      // console.log(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    } // console.log(ev.keycode);
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div> No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
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
      {renderResults()}
    </MainPageLayout>
  );
  // whatever goes inside this tag will be a part of mainpagelayout
  // we have used children property in that
  // value prop inside input element is to directly associate input state with the input element.
};
