import React, { useState } from "react";
import { DialogContext } from "./DialogContext";
function Header(props) {
  return (
    <React.Fragment>
      <DialogContext.Consumer>
        {(context) => {
          return <div onClick={context.onHide}>X</div>;
        }}
      </DialogContext.Consumer>
      {props.children}
    </React.Fragment>
  );
}

export default Header;
