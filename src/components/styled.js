import styled from "styled-components";

export const StInputText = styled.input`
  display: flex;
  justify-content: space-between;
  padding: 5px 0 5px 0;
  margin-left: 40px;
  margin-right: 40px;
  height: 30px;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0px 10px 14px -7px #276873;
`
export const StInputCheck = styled.input`
  accent-color: rgb(4, 216, 32);
  zoom: 1.4;
  border-radius: 50px;
  margin-right: 5px;
`
export const StButton = styled.button`
  margin-left: 10px;
  width: 25px;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`
export const StButtonDelete = styled(StButton)`
  background-color: #d84141;
  transition-duration: 0.5s;
  box-shadow: 0px 8px 12px -5px #9c2525;
  text-shadow: 0px 1px 0px #9c2525;
  background: linear-gradient(#d84141, #9c2525);
  & :hover {
    background: linear-gradient(#9c2525, #d84141);
  }
`
export const StButtonAdd = styled(StButton)`
  width: 75px;
  border-width: 1px;
  font-weight: bold;
  border-color: #9eb359;
  box-shadow: 0px 10px 14px -7px #437327;
  text-shadow: 0px 1px 0px #3d8a54;
  background: linear-gradient(#59b386, #beff28);
  & :hover {
    background: linear-gradient(#beff28, #59b386);
  }
`
export const StTask = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #000000;
    margin-bottom: 10px;
    margin-right: 40px;
    padding: 5px 5px 5px 5px;
    border-radius: 8px;
    box-shadow: 0px 10px 14px -7px #ffd3999d;
    width: 400px;
`
export const StWings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const WingItem = styled.div`
  zoom: ${props => props.small ? "0.1" : "0.2"};
`

export const StWrap = styled.div`
   margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    border: 2px solid rgb(105, 105, 105);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.787);
`