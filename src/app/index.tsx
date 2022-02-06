import React from 'react';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'store/store';

import {
  fetchNumbers,
  clearNumbers,
  addNumber,
} from 'store/actions/numbersActions';

import {
  showWrongNumberFormatError,
  hideWrongNumberFormatError,
  hideNoSearchResultsError,
} from 'store/actions/errorsActions';

import {
  showNumberAddedMsg,
  hideNumberAddedMsg,
} from 'store/actions/messagesActions';

import * as S from './styles';
import { GlobalStyles } from 'theme/GlobalStyles';

import { Form } from 'components/Form';
import { SearchResults } from 'components/SearchResults';
import { SuccessMsg } from 'components/SuccessMsg';

const App: React.FC = () => {
  const apiUrl: string = 'http://localhost:4000/numbers';

  const numbers = useSelector((state: RootState) => state.numbers.numbers);
  const wrongNumberFormat = useSelector(
    (state: RootState) => state.errors.wrongNumberFormat
  );
  const noSearchResults = useSelector(
    (state: RootState) => state.errors.noSearchResults
  );
  const numberAdded = useSelector(
    (state: RootState) => state.messages.numberAdded
  );

  const dispatch = useDispatch<AppDispatch>();

  const addNewNumber = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const input = event.currentTarget.elements[0] as HTMLInputElement;
    const regex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

    if (regex.test(input.value) && !numbers.length) {
      dispatch(addNumber(apiUrl, input.value));
      input.value = '';
      dispatch(hideNoSearchResultsError());
      dispatch(clearNumbers());
      dispatch(showNumberAddedMsg());
    } else {
      dispatch(showWrongNumberFormatError());
    }
  };

  const getSearchResults = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (numberAdded) {
      dispatch(hideNumberAddedMsg());
    } else if (wrongNumberFormat) {
      dispatch(hideWrongNumberFormatError());
    } else if (noSearchResults) {
      dispatch(hideNoSearchResultsError());
    }

    const inputValue = event.target.value,
      queryValue = `${inputValue.split(' ').slice(1).join('+')}`,
      query = `?number_like=${queryValue}`,
      url = `${apiUrl}${query}`;

    if (!inputValue || inputValue.match(/^[a-zA-Zа-яА-Я\s]/)) {
      dispatch(clearNumbers());
    } else {
      dispatch(fetchNumbers(url));
    }
  };

  const formatNumber = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const input = event.currentTarget;

    if (event.key === 'Backspace') {
      return;
    } else if (input.value.match(/^[1234569]$/)) {
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

  const debouncedGetSearchResults = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      getSearchResults(event);
    },
    500
  );

  return (
    <S.App>
      <GlobalStyles />
      <Form
        onSubmit={addNewNumber}
        onChange={debouncedGetSearchResults}
        onKeyDown={formatNumber}
        wrongNumberFormat={wrongNumberFormat}
        noSearchResults={noSearchResults}
      />
      {numbers.length > 0 && <SearchResults searchResults={numbers} />}
      {numberAdded && <SuccessMsg />}
    </S.App>
  );
};

export default App;
