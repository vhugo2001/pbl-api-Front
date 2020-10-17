import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ _mensagem, _variant }) => {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState(_variant);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, [_mensagem]);

  return (
    <Alert show={show} variant={_variant}>
      {_mensagem}
    </Alert>
  );
};

export default CustomAlert;
