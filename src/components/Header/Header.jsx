import {useState} from 'react';
import './Styles.scss';

export default function Header() {
  const [pokemonName, setPokemonName]=useState("");

  const handleChange=e=>{
    setPokemonName(e.target.value);
  }

  function recargar(datopoke){
    const url=window.location.origin;
    const nurl=url + "/" + datopoke;     
    window.location.href=nurl;
  }
  
    return (
    <div className="header">
        <div className="title">Pokedex</div>
        <div className="search">          
          <input type="text" className="searchbox" placeholder='Ingrese número o nombre' value={pokemonName} onChange={handleChange} />          
          <button className="searchbutton" onClick={()=>recargar(pokemonName.toLowerCase())}> 
              <i className="fas fa-search">Buscar</i> 
          </button>          
        </div>        
      </div>
  )
}
