import styled from 'styled-components';

export const StButton = styled.button`
  position: absolute;
  top: 20px;
  left: 420px;
  width: 70px;
  height: 25px;
  border: 2px solid rgb(105, 105, 105);
  border-radius: 15px;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.fontColor};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`