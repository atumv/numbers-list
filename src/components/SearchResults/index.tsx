import React from 'react';
import * as S from './styles';

interface SearchResultsProps {
  searchResults: { id: number; number: string }[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => (
  <S.SearchResults>
    {searchResults.map((number: { id: number; number: string }) => (
      <li key={number.id}>{number.number}</li>
    ))}
  </S.SearchResults>
);
