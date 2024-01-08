import {Navigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './Styles.css';

export function PokemonCard(props) {  
    const getPokemonCard=()=> {   
      if(props.nombre!='AxiosError'){              
        return (          
          <Card style={{ width: '12rem', textDecoration:'none' }} className='card-title-no-link'>
            <Card.Title style={{ textDecoration:'none !important' }} className='card-title-no-link'><Badge pill bg="secondary" style={{textAlign:'center !important'}}>No.{props.num}</Badge></Card.Title>
            <Card.Img variant="top" src={props.imagen} />
            <Card.Body>              
              <Card.Title>
                <Badge pill bg="secondary" style={{textAlign:'center !important'}}>
                  {props.nombre}
                </Badge>
                </Card.Title>
              <Card.Text>
                {props.descripcion}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                    {(props.tipo).map((datot, index)=>(                                                
                        <ListGroup.Item key={index} className={"background-color-"+datot?.type?.name}>{datot?.type?.name}</ListGroup.Item>                        
                    ))}              
            </ListGroup>
            <Card.Body>            
              <Card.Text>Crecimiento: {props.crecimiento}</Card.Text>
              <Card.Text>Habitat: {props.habitat}</Card.Text>
            </Card.Body>
          </Card>
        );        
        }else{
          return <Navigate to="/Error" />
        }
      }
      
  
    return (
      <div className="contenido">     
          {getPokemonCard()}       
      </div>
    )
} 