import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormAdd from "../feature/FormAdd";
import FormUpdate from "../feature/FormUpdate";
import { useEffect } from "react";

const Moldan = (props: {
  propsUpdate?: null | number;
  typeshow: string;
  show: boolean;
  setShow: (value: boolean) => boolean;
}) => {
  const { propsUpdate, typeshow, show, setShow } = props;

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {typeshow === "ADD" ? (
            <FormAdd></FormAdd>
          ) : (
            <FormUpdate propsUpdate={propsUpdate as number}></FormUpdate>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Moldan;
