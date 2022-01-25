import React, { useState } from 'react';
import Form from './components/Form';
import Input from './components/Input';
import AddBtn from './components/AddBtn';
import AddMsg from './components/AddMsg';
import SearchResults from './components/SearchResults';
import { IResults } from './interfaces/interfaces';

const App: React.FC = () => {
  const [apiUrl] = useState<string>('http://localhost:4000/numbers');
  const [searchResults, setSearchResults] = useState<IResults[]>([]);
  const [maskCheckError, setMaskCheckError] = useState<boolean>(false);
  const [noResultsError, setNoResultsError] = useState<boolean>(false);
  const [defaultBorderStyle, setDefaultBorderStyle] = useState<boolean>(true);
  const [showAddMsg, setShowAddMsg] = useState<boolean>(false);

  const addNumber = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    const regex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
    if (regex.test(input.value)) {
      sendNumber(input.value);
      input.value = '';
      setSearchResults([]);
      setShowAddMsg(true);
      setNoResultsError(false);
    } else {
      setMaskCheckError(true);
    }
  };

  const getSearchResults = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.trim() || inputValue.match(/[a-zA-Zа-яА-Я]/)) {
      setSearchResults([]);
    } else {
      const url = `${apiUrl}?number_like=${inputValue
        .split(' ')
        .slice(1)
        .join('+')}`;
      const results = await fetchData(url);
      if (!results.length) {
        setSearchResults([]);
        setNoResultsError(true);
      } else {
        setSearchResults(results);
      }
    }
  };

  const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const sendNumber = (value: string) => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now(),
        number: value,
      }),
    };
    fetch(apiUrl, options);
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
    setShowAddMsg(false);
    setMaskCheckError(false);
    setNoResultsError(false);
    setDefaultBorderStyle(true);
    getSearchResults(e);
  };

  return (
    <div className="app">
      <Form onSubmit={addNumber}>
        <Input
          onChange={handleChange}
          onKeyPress={formatNumber}
          maskCheckError={maskCheckError}
          noResultsError={noResultsError}
          defaultBorderStyle={defaultBorderStyle}
        />
        <AddBtn />
      </Form>
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
      {showAddMsg && <AddMsg />}
    </div>
  );
};

export default App;
