export interface IResults {
  id: number;
  number: string;
}

export interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maskCheckError: boolean;
  noResultsError: boolean;
  defaultBorderStyle: boolean;
}

export interface SearchResultsProps {
  searchResults: IResults[];
}
