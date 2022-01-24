import React, { useState } from 'react';
import Form from './components/Form';
import Input from './components/Input';
import AddBtn from './components/AddBtn';
import SuccessAddMsg from './components/SuccessAddMsg';
import SearchResults from './components/SearchResults';
import { IResults } from './interfaces/interfaces';

const App: React.FC = () => {
  const [apiUrl] = useState<string>('http://localhost:4000/numbers');
  const [searchResults, setSearchResults] = useState<[IResults] | []>([]);
  const [maskCheckError, setMaskCheckError] = useState<boolean>(false);
  const [noResultsError, setNoResultsError] = useState<boolean>(false);
  const [defaultBorderStyle, setDefaultBorderStyle] = useState<boolean>(true);
  const [showAddMsg, setShowAddMsg] = useState<boolean>(false);

  const addNumber = (e: any): void => {
    e.preventDefault();
    const input = e.target.elements[0];
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

  const getSearchResults = async (e: any) => {
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

  const sendNumber = (value: any) => {
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

  const formatNumber = (e: any) => {
    if (e.target.value.match(/^[1234569]$/)) {
      e.target.value = '+7 ' + e.target.value;
    } else if (e.target.value.match(/^[78]$/)) {
      e.target.value = '+7 ';
    } else if (
      e.target.value.match(/^\+7\s\d{3}$/) ||
      e.target.value.match(/^\+7\s\d{3}\s\d{3}$/) ||
      e.target.value.match(/^\+7\s\d{3}\s\d{3}\s\d{2}$/)
    ) {
      e.target.value += ' ';
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
      {showAddMsg && <SuccessAddMsg />}
    </div>
  );
};

export default App;
