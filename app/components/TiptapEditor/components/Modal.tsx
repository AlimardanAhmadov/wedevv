import React, { useEffect } from "react";
import ReactModal, { Props } from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 10000
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: 480,
    marginRight: "-50%",
    padding: 24,
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0c1b29",
    borderRadius: "15px",
    border: 'none',
    boxShadow: 'var(0 0 #0000, 0 0 #0000), var(0 0 #0000, 0 0 #0000), 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  }
};

export function Modal(props: Props) {
  const { style, ...rest } = props;

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal style={{ ...modalStyles, ...style }} {...rest}>
      {props.children}
    </ReactModal>
  );
}
