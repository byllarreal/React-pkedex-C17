export function PokemonCard(props) {  
    const getPokemonCard=()=>{           
        return(                    
            <div className="card">
                <div className="photo">
                <img src={props.imagen} alt="pokemon photo" />
                </div>
                <div className="info">
                <div className="id">No.{props.num}</div>
                <div className="name">{props.nombre}</div>
                <div className="types">                    
                    {(props.tipo).map((datot, index)=>(                                                
                        <div key={index} className={"background-color-"+datot?.type?.name}>{datot?.type?.name}</div>                        
                    ))}
                    
                </div>
                </div>
            </div>            
        );
        
    };    
  
    return (
      <div className="contenido">     
          {getPokemonCard()}       
      </div>
    )
} 