import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './interfaces/interfaces';
import { AppDispatch } from './store/store';

import {
  fetchNumbers,
  clearFetchedNumbers,
  showWrongNumberFormatError,
  hideWrongNumberFormatError,
  showNoSearchResultsError,
  hideNoSearchResultsError,
  showNewNumberAddedMsg,
  hideNewNumberAddedMsg,
  addNumber,
} from './store/actions';

import Form from './components/Form';
import Input from './components/Input';
import AddBtn from './components/AddBtn';
import SearchResults from './components/SearchResults';
import NewNumberAddedMsg from './components/NewNumberAddedMsg';

const App: React.FC = () => {
  const [apiUrl] = useState<string>('http://localhost:4000/numbers');

  const fetchedNumbers = useSelector(
    (state: RootState) => state.fetchedNumbers.fetchedNumbers
  );
  const wrongNumberFormat = useSelector(
    (state: RootState) => state.errors.wrongNumberFormat
  );
  const noSearchResults = useSelector(
    (state: RootState) => state.errors.noSearchResults
  );
  const newNumberAdded = useSelector(
    (state: RootState) => state.messages.newNumberAdded
  );

  const dispatch = useDispatch<AppDispatch>();

  const sendNumber = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    const regex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

    if (regex.test(input.value)) {
      addNumber(apiUrl, input.value);
      input.value = '';
      dispatch(clearFetchedNumbers());
      dispatch(showNewNumberAddedMsg());
      dispatch(hideNoSearchResultsError());
    } else {
      dispatch(showWrongNumberFormatError());
    }
  };

  const getSearchResults = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const queryValue = `${inputValue.split(' ').slice(1).join('+')}`;
    const query = `?number_like=${queryValue}`;
    const url = `${apiUrl}${query}`;

    if (inputValue.match(/[a-zA-Zа-яА-Я]/) || !queryValue) {
      dispatch(clearFetchedNumbers());
    } else {
      dispatch(fetchNumbers(url));
      if (!fetchedNumbers.length) {
        dispatch(clearFetchedNumbers());
        dispatch(showNoSearchResultsError());
      }
    }
  };

  const formatNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.match(/^[1234569]$/)) {
      e.currentTarget.value = '+7 ' + e.currentTarget.value;
    } else if (e.currentTarget.value.match(/^[78]$/)) {
      e.currentTarget.value = '+7 ';
    } else if (
      e.currentTarget.value.match(/^\+7\s\d{3}$/) ||
      e.currentTarget.value.match(/^\+7\s\d{3}\s\d{3}$/) ||
      e.currentTarget.value.match(/^\+7\s\d{3}\s\d{3}\s\d{2}$/)
    ) {
      e.currentTarget.value += ' ';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(hideNewNumberAddedMsg());
    dispatch(hideWrongNumberFormatError());
    dispatch(hideNoSearchResultsError());
    getSearchResults(e);
  };

  return (
    <div className="app">
      <Form onSubmit={sendNumber}>
        <Input
          onChange={handleChange}
          onKeyPress={formatNumber}
          wrongNumberFormat={wrongNumberFormat}
          noSearchResults={noSearchResults}
        />
        <AddBtn />
      </Form>
      {fetchedNumbers.length > 0 && (
        <SearchResults searchResults={fetchedNumbers} />
      )}
      {newNumberAdded && <NewNumberAddedMsg />}
    </div>
  );
};

export default App;
