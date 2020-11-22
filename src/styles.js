import Styled from "styled-components";

export const Container = Styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  border-radius: 4px;
  width:150px;
  cursor:pointer;
  background:repeating-linear-gradient(45deg, black, transparent 100px)
`;

export const AppDiv = Styled.div`
`;
