import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <Modal show={isModalOpen} backdrop='static' keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title className='fs-2 fw-bolder text-black'>
              Welcome!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Feel free to search and inform about any book in this list
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Welcome;
