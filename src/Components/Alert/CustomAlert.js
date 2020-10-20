import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ _mensagem, _variant }) => {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState(_variant);
  const [mensagem, setMensagem] = useState(_mensagem);

  useEffect(() => {
    if (_mensagem !== "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [_mensagem]);

  return (
    <Alert
      show={show}
      variant={_variant}
      onClose={() => setShow(false)}
    >
      <Alert.Heading className="alert-title">Menssagem do sistema</Alert.Heading>
      {_mensagem}
    </Alert>
  );
};

export default CustomAlert;
