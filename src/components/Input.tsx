import React from 'react';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  wrongNumberFormat: boolean;
  noSearchResults: boolean;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  onKeyPress,
  wrongNumberFormat,
  noSearchResults,
}) => (
  <input
    className={`${noSearchResults ? 'input no-results-error' : 'input'} ${
      wrongNumberFormat ? 'input mask-check-error' : 'input'
    }`}
    type="tel"
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder="Введите номер"
    maxLength={16}
    autoFocus
  />
);
