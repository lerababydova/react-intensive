import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import styles from "./modalContainer.module.css";
import Button from "../Button/Button";

const modalRoot = document.getElementById("modal-root");
const modalElement = document.createElement("div");

const ModalContainer = ({ children, onCloseModal }) => {
  useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, []);

  return createPortal(
    <>
      <div className={styles.modalContainer}>
        {children} <Button name="Закрыть" onClick={onCloseModal} />
      </div>
      <div className={styles.modalBackgroundMask}></div>
    </>,
    modalElement
  );
};

export default ModalContainer;
