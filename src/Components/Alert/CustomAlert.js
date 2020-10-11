import React, { useEffect } from "react";
import { Alert } from "react-bootstrap/Alert";

const CustomAlert = ({ _mensagem, _variant }) => {
  const [mensagem, setMensagem] = useState(_mensagem);
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState(_variant);

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return (
    <Alert show={show} variant={variant}>
      {mensagem}
    </Alert>
  );
};

export default CustomAlert;
