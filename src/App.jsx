import Header from './components/Header/Header'
import {PokemonList} from './components/PokemonList/PokemonList'
import {useParams} from 'react-router-dom';
import {ModalPremium} from './components/Modals/ModalPremium.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  const {poknum}=useParams();    
  return (
    <>      
      <div className="container">
        <Header />   
        <ModalPremium />     
        {poknum===undefined ? <PokemonList nom='1'/>:<PokemonList nom={poknum}/>}
    </div>
    </>
  )
}

export default App
