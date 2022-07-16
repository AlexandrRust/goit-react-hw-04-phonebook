import styled from 'styled-components';

export const FirstButton = styled.button`
  width: 100px;
  padding: 3px;
  border-color: gray;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: blue;
    border-color: blue;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
