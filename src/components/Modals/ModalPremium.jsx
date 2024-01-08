import { useState } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export function ModalPremium() {
  const [show, setShow] = useState(false);   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>    
    <h1>Tenemos algo para ti {' '}
      <Button variant="primary" onClick={handleShow}>
        NEW !!!
      </Button>
    </h1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Solo para ti que eres Premium</Modal.Title>
        </Modal.Header>
        <Modal.Body>Mira la serie viajes Pokemon! episodio 1, o escucha la play list de tu serie favorita!</Modal.Body>
        <Modal.Footer>
            <Link to="/Premiumplay">
          <Button variant="secondary">
            ¡ES PIKACHU!
          </Button>
          </Link>
          <Link to="/Premiummusic/vip">
          <Button variant="secondary">
            Play list
          </Button>          
          </Link>            
        </Modal.Footer>        
      </Modal>
      
    </>
  );
}

