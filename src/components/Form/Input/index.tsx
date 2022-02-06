import React from 'react';
import * as S from './styles';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  wrongNumberFormat: boolean;
  noSearchResults: boolean;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  onKeyDown,
  noSearchResults,
  wrongNumberFormat,
}) => (
  <S.Input
    type="tel"
    onChange={onChange}
    onKeyDown={onKeyDown}
    noSearchResults={noSearchResults}
    wrongNumberFormat={wrongNumberFormat}
    placeholder="Введите номер"
    maxLength={16}
    autoFocus
  />
);
