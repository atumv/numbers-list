export interface fetchedNumbers {
  id: number;
  number: string;
}

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  wrongNumberFormat: boolean;
  noSearchResults: boolean;
}

export interface SearchResultsProps {
  searchResults: fetchedNumbers[];
}

export interface RootState {
  fetchedNumbers: { fetchedNumbers: fetchedNumbers[] };
  errors: { wrongNumberFormat: boolean; noSearchResults: boolean };
  messages: { newNumberAdded: boolean };
}
