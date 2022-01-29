import React from 'react';
import { SearchResultsProps } from '../interfaces/interfaces';

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => (
  <ul className="search-results">
    {searchResults.map((number: { id: number; number: string }) => (
      <li key={number.id}>{number.number}</li>
    ))}
  </ul>
);
