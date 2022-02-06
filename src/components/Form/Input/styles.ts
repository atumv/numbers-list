import styled from 'styled-components';

export const Input = styled.input<{
  noSearchResults: boolean;
  wrongNumberFormat: boolean;
}>`
  padding: 16px 8px;
  font-size: 16px;
  border: 2px solid #c5c5c5;
  border-right-width: 0;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  border-color: ${(props) =>
    props.wrongNumberFormat
      ? '#ffa6a6'
      : props.noSearchResults
      ? '#ffffb9'
      : '#c5c5c5'};
  background: ${(props) =>
    props.wrongNumberFormat
      ? '#ffc4c4'
      : props.noSearchResults
      ? '#ffffcf'
      : '#fff'};
  color: ${(props) =>
    props.wrongNumberFormat
      ? '#853939'
      : props.noSearchResults
      ? '#333'
      : '#000'};

  &:focus {
    outline: none;
    border-color: #2948ff;
    box-shadow: 0 0 2px inset #2948ff;
  }

  &::placeholder {
    color: #bbb;
  }

  &:focus::placeholder {
    color: #ccc;
  }

  @media (max-width: 576px) {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    border-right-width: 2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-width: 0px;
  }
`;
