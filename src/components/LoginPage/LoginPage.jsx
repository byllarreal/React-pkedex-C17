import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Google from '../../../public/Imgs/google.png';
import Facebook from '../../../public/Imgs/facebook.png';
import Github from '../../../public/Imgs/github.png';

export function LoginPage() {
  const [usuario, setUsuario]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(usuario==="" || password===""){
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <>
    <div>
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton">
            <img src={Google} alt="" className="icon" />            
          </div>
          <div className="loginButton">
            <img src={Facebook} alt="" className="icon" />            
          </div>
          <div className="loginButton">
            <img src={Github} alt="" className="icon" />            
          </div>
        </div>
      </div>
    </div>    
    <Form className="formulario" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={usuario} onChange={e=>setUsuario(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>      
    </Form>
    {error && <p>Todos los campos son obligatorios</p>}
    </>
  );
}


