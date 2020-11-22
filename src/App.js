import React, {useState, useRef} from "react";
import Modal from "./components/Dialog";
import {Container, AppDiv} from "./styles";

export default function App() {
    const [open, setOpen] = useState(true);
    //const [modalRef, setModalRef] = useRef(null);

    const changeDialogState = () => {
        setOpen(!open);
    };
    return (
        <AppDiv className="App">
            <div>
                <Container onClick={changeDialogState}>click me</Container>
                <Modal open={open} onRequestClose={changeDialogState}>
                    <Modal.Header>
                        <div>{}</div>
                    </Modal.Header>
                    <Modal.Body>
                        <div>{}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>{}</div>
                    </Modal.Footer>
                </Modal>
            </div>
        </AppDiv>
    );
}
