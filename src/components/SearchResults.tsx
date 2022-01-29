import React from 'react';
import { SearchResultsProps, fetchedNumber } from '../interfaces/interfaces';

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => (
  <ul className="search-results">
    {searchResults.map((number: fetchedNumber) => (
      <li key={number.id}>{number.number}</li>
    ))}
  </ul>
);
