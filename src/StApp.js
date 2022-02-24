import styled from 'styled-components';

export const StApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 500px;
  margin: 90px auto;
  border: 2px solid rgb(105, 105, 105);
  border-radius: 8px;
  color: ${(props) => props.theme.fontColor};
  // background-color: ${(props) => props.theme.body};
`

