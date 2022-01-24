import React from 'react';
import { InputProps } from '../interfaces/interfaces';

const Input: React.FC<InputProps> = ({
  onChange,
  onKeyPress,
  maskCheckError,
  noResultsError,
  defaultBorderStyle,
}) => (
  <input
    className={`${defaultBorderStyle ? 'input' : ''} ${
      noResultsError ? 'no-results-error' : ''
    } ${maskCheckError ? 'mask-check-error' : ''}`}
    type="tel"
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder="Введите номер"
    maxLength={16}
    autoFocus
  />
);

export default Input;
