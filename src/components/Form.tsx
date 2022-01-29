import React from 'react';
import { FormProps } from '../interfaces/interfaces';

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
  </form>
);
