import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StNotification = styled.div`
  background: ${({isSuccess}) => isSuccess ? 'green' : 'red'};
  text-align: center;
  position: absolute;
  top: 10px;
  left:0;
  right: 0;
  margin: 0 auto;
  border: 1px solid #000000;
  padding: 5px;
  height: 50px;
  width: 400px;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 10px 14px -7px #276873;

  transform: translateY(-10px);
  opacity: 0;
  animation: ${fadeIn} .5s ease-in-out forwards;
`


