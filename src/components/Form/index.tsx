import React from 'react';
import * as S from './styles';
import { Input } from 'components/Form/Input';
import { AddBtn } from 'components/Form/AddBtn';

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  wrongNumberFormat: boolean;
  noSearchResults: boolean;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  onChange,
  onKeyDown,
  wrongNumberFormat,
  noSearchResults,
}) => (
  <S.Form onSubmit={onSubmit}>
    <Input
      onChange={onChange}
      onKeyDown={onKeyDown}
      wrongNumberFormat={wrongNumberFormat}
      noSearchResults={noSearchResults}
    />
    <AddBtn />
  </S.Form>
);
