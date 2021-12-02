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
  const [searchOption, setSeachOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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
  const onRadioChange = ev => {
    setSeachOption(ev.target.value);
  };
  console.log(searchOption);
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div> No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }

    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actor-search">
          Actors
          <input
            id="actor-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
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
