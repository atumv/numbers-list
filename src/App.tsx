import React, { useState } from 'react';
import debounce from 'lodash.debounce';
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
      dispatch(addNumber(apiUrl, input.value));
      input.value = '';
      dispatch(showNewNumberAddedMsg());
      dispatch(clearFetchedNumbers());
      dispatch(hideNoSearchResultsError());
    } else {
      dispatch(showWrongNumberFormatError());
    }
  };

  const getSearchResults = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const queryValue = `${inputValue.split(' ').slice(1).join('+')}`;
    const query = `?number_like=${queryValue}`;
    const url = `${apiUrl}${query}`;

    if (!queryValue) {
      dispatch(clearFetchedNumbers());
    } else {
      dispatch(fetchNumbers(url));
      if (!fetchedNumbers.length) {
        dispatch(clearFetchedNumbers());
        dispatch(showNoSearchResultsError());
      }
    }
  };

  const formatNumber = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;

    if (input.value.match(/^[1234569]$/)) {
      input.value = '+7 ' + input.value;
    } else if (input.value.match(/^\+7$/) || input.value.match(/^[78]$/)) {
      input.value = '+7 ';
    } else if (
      input.value.match(/^\+7\s\d{3}$/) ||
      input.value.match(/^\+7\s\d{3}\s\d{3}$/) ||
      input.value.match(/^\+7\s\d{3}\s\d{3}\s\d{2}$/)
    ) {
      input.value += ' ';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(hideNewNumberAddedMsg());
    dispatch(hideWrongNumberFormatError());
    dispatch(hideNoSearchResultsError());
    getSearchResults(e);
  };

  const debouncedHandleChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
    },
    500
  );

  return (
    <div className="app">
      <Form onSubmit={sendNumber}>
        <Input
          onChange={debouncedHandleChange}
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
