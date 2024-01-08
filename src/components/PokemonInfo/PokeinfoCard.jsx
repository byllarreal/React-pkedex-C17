import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import './Pokemon.css';




export function PokeinfoCard(props) {      
    
    const getPokeinfoCardNew=()=>{        
        const nivelexp=Array.from({ length: 10 }, (_, index) => index + 1);
        const recargar = (datopoke, e)=>{            
            e.preventDefault();

            if(datopoke===0){
                datopoke=1010
            }else if(datopoke===1011){
                datopoke=1;
            }            
            const url=window.location.origin;
            const nurl=url + "/Pokemon/" + datopoke; 
            window.location.href=nurl;
            
        }

    
    
    const [index, setIndex] = useState(0); 
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        };

    return(
        <Container className="d-flex justify-content-center" style={{ width: '800px' }}>
        <Card className="text-center" style={{ width: '800px' }}>
      <Card.Header>
      <Button variant="primary" size="lg" onClick={(e)=>recargar(props.id-1,e)}> 
            prev
        </Button>{' '}  
        <Link to={`/${props.id}`}>
            <Button variant="primary" size="lg">
                Search
            </Button>
      </Link>{' '}
      <Button variant="primary" size="lg" onClick={(e)=>recargar(props.id+1,e)}> 
            next
        </Button> 
      </Card.Header>
      <Card.Body>
        <Card.Title><h1>{props.nombre}</h1></Card.Title>
        <Card.Text>
        <Card className={"background-color-"+props.tipo[1]?.type?.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Img className={"background-color-"+props.tipo[0]?.type?.name} variant="top" src={props.imagen} alt={props.nombre} style={{ width: '30%', objectFit: 'cover', borderRadius: '50%'}}/>
        <Card.Body>
          <Card.Text>
          <Stack direction="horizontal" gap={5}>
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>          
          <th>Altura</th>
          <th>Peso</th>
          <th>Habilidad</th>
          <th>Experiencia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Badge pill bg="primary">
                {props.id}       
            </Badge>
          </td>
          <td>
            <Badge pill bg="secondary">
                {props.altura+' centímetros'}      
            </Badge>
          </td>
          <td>
            <Badge pill bg="success">
                {props.peso+' kilos'}       
            </Badge>
          </td>
          <td>            
            <ul>
                {(props.habilidad).map((datoh, index)=>(                                                                                                
                    <li key={index}>
                        <Badge pill bg="danger">
                            {datoh?.ability?.name}
                        </Badge>
                    </li>                                            
                ))}
            </ul>                  
          </td>
          <td>           
            {(nivelexp).map((numero)=>{                                                                                               
                if(numero<11-Math.trunc(((props.experiencia)/300)*10)){        
                    return <div key={numero} className='barra-gris'></div>
                }else{
                    return <div key={numero} className='barra-roja'></div>
                }
            })}
            
          </td>
        </tr>        
      </tbody>
    </Table>     
    </Stack>
    
          </Card.Text>
        </Card.Body>
      </Card>
        </Card.Text>        
      </Card.Body>
      <Card.Footer className="text-muted">
        <h1>EVOLUCIÓN</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
      {(props.imgsevo).map((datoi, index)=>(  
                    <Carousel.Item key={index} >                          
                        <Badge pill bg="secondary">Escala evolutiva: {index + 1}</Badge> 
                        <h3>{props.nomevos[index]}</h3>                        
                        <Card.Img variant="top" src={datoi} alt={props.nombre} style={{ width: '30%', objectFit: 'cover' }}/>                        
                    </Carousel.Item>                                                                          
        ))}      
      </Carousel>
      </Card.Footer>
    </Card>
    </Container>
    );
}
return (
    <div className="contenido">     
        {getPokeinfoCardNew()}       
    </div>
  )
}