import React, { useState } from "react";
import { DialogContext } from "./DialogContext";
function Header(props) {
  return (
    <React.Fragment>
      <DialogContext.Consumer>
        {(context) => {
          return <div className={'close'} onClick={context.onHide}/>;
        }}
      </DialogContext.Consumer>
      {props.children}
    </React.Fragment>
  );
}

export default Header;
