import React, { useState, useRef } from "react";
import Modal from "./components/Dialog";
import { Container, AppDiv } from "./styles";

export default function App() {
  const [open, setOpen] = useState(false);
  //const [modalRef, setModalRef] = useRef(null);
  const changeDialogState = () => {
    setOpen(!open);
  };
  return (
    <AppDiv className="App">
      <div>
        <Container onClick={changeDialogState}>click me</Container>
        <Modal open={open} onRequestClose={changeDialogState}>
          <Modal.Header>header</Modal.Header>
          <Modal.Body>body</Modal.Body>
          <Modal.Footer>footer</Modal.Footer>
        </Modal>
      </div>
    </AppDiv>
  );
}
