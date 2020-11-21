import React, { useState } from "react";
import {
  OverlayDialog,
  DialogContentContainer,
  DialogContainer
} from "./styles";
import Header from "./header";
import Body from "./Body";
import Footer from "./footer";

import DialogRender from "./DialogRender";
import { DialogContext } from "./DialogContext";

function Modal(props) {
  const { onRequestClose, children, open } = props;

  const closeDialog = () => {
    onRequestClose();
  };

  return (
    <React.Fragment>
      {open && (
        <DialogContainer>
          <DialogContext.Provider value={{ onHide: onRequestClose }}>
            <OverlayDialog onClick={onRequestClose} />
            <DialogContentContainer>
              <DialogRender {...props}>{children}</DialogRender>
            </DialogContentContainer>
          </DialogContext.Provider>
        </DialogContainer>
      )}
    </React.Fragment>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
