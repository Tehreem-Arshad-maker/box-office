import React, { useState } from 'react';
import { ActorGrid } from '../components/actor/ActorGrid';
import { CustomRadio } from '../components/CustomRadio';
import { MainPageLayout } from '../components/MainPageLayout';
import { ShowGrid } from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hools';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

export const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const onInputChange = ev => {
    // ev object

    setInput(ev.target.value);
  };
  const [searchOption, setSeachOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';
  // useEffect(() => {
  //   console.log('use useefect function');
  //   return () => {
  //     console.log('exit');
  //   };
  // }, [searchOption]);
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
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };
  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actor-search"
            value="people"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          {' '}
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
  // whatever goes inside this tag will be a part of mainpagelayout
  // we have used children property in that
  // value prop inside input element is to directly associate input state with the input element.
};
