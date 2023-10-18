export default function PokemonCard(props) {  
    const getPokemonCard=()=>{        
        return(        
            <div className="card">
                <div className="photo">
                <img src={props.imagen} alt="pokemon photo" />
                </div>
                <div className="info">
                <div className="id">{props.num}</div>
                <div className="name">{props.nombre}</div>
                <div className="types">
                    <div className="grass">Grass</div>
                    <div className="poison">Poison</div>
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