import React from 'react';
import { InputProps } from '../interfaces/interfaces';

const Input: React.FC<InputProps> = ({
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

export default Input;
