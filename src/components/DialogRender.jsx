import React, { useEffect } from "react";

function DialogRender(props) {

  const allowedEvents = ['keydown', 'keypress', 'keyup'];

  const handleClose = (e) => {
    if (e.keyCode === 27) {
      props.onRequestClose()
    }
  };

  useEffect(() => {
    allowedEvents.forEach((event) => {
      document.addEventListener(event, handleClose)
    });
    return () => {
      allowedEvents.forEach((event) => {
        document.removeEventListener(event, handleClose)
      })
    }
  }, []);

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default DialogRender;
