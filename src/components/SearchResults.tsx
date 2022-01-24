import React from 'react';
import { SearchResultsProps } from '../interfaces/interfaces';

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => (
  <ul className="search-results">
    {searchResults.map((item: { id: number; number: string }) => (
      <li key={item.id}>{item.number}</li>
    ))}
  </ul>
);

export default SearchResults;
