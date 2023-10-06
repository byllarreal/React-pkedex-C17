
export default function PokemonList() {
  const getPokemonCard=()=>{
    return(
    <div class="card">
          <div class="photo">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="pokemon photo" />
          </div>
          <div class="info">
            <div class="id">N° 001</div>
            <div class="name">bulbasaur</div>
            <div class="types">
              <div class="grass">Grass</div>
              <div class="poison">Poison</div>
            </div>
          </div>
        </div>
    );
  };    
  return (
    <div class="contenido">       
       {getPokemonCard()}
      </div>
  )
}
