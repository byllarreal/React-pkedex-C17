import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Styles.scss';

export default function Header() {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  }

  return (
    <div className="header">
      <div className="title">Pokedex</div>
      <div className="search">
        <input
          type="text"
          className="searchbox"
          placeholder='Ingrese número o nombre'
          value={pokemonName}
          onChange={handleChange}
        />
        <Link to={`/${pokemonName.toLowerCase()}`} className="searchbutton">
          <i className="fas fa-search"></i> Buscar
        </Link>
      </div>
    </div>
  );
}
