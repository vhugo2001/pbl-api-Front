import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmNota = ({ show, setShow, title, textBody, action }) => {

  const handleClose = () => {
    setShow(false);
  };

  const handleConfirm = () => {
    action(true);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{textBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmNota;
