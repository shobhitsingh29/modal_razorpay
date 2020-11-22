import Styled from "styled-components";

export const DialogContentContainer = Styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
height:50%;
width:50%;
padding:0px 0px;
border:5px solid black;
border-radius:4px;
background: red;
opacity: 1;

.close {
  position: relative;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor:pointer;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

`;

export const DialogContainer = Styled.div`
position:absolute;
top:0;
left:0;
`;

export const OverlayDialog = Styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgb(40 30 156 / 54%)
`;


