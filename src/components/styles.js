import Styled from "styled-components";

export const DialogContentContainer = Styled.div`
position:fixed;
top:0;
left:0;
height:100%;
width:100%;
padding:0px 0px;

display:flex;
justify-content:center;
align-items:center;
border:1px solid black;

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
    background: rgba(0, 0, 0, 0.54);
`;
