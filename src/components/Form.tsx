import React from 'react';

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
  </form>
);
