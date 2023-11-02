import Header from './components/Header/Header'
import {PokemonList} from './components/PokemonList/PokemonList'
import {useParams} from 'react-router-dom';

import './App.css'

function App() {
  const {poknum}=useParams();  
  
  return (
    <>      
      <div className="container">
        <Header />
        {poknum===undefined ? <PokemonList nom='1'/>:<PokemonList nom={poknum}/>}
    </div>
    </>
  )
}

export default App
