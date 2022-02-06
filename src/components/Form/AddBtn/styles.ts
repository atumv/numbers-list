import styled from 'styled-components';

export const AddBtn = styled.button`
  background: linear-gradient(to right, #396afc, #2948ff);
  border: 2px solid #2948ff;
  border-left-width: 0px;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 16px 32px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:focus {
    box-shadow: 0 0 6px #343b62;
  }

  @media (max-width: 576px) {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
  }
`;
