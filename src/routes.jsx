import {createBrowserRouter}from 'react-router-dom'
import App from './App.jsx'
import {Pokemon} from './components/PokemonInfo/Pokemon.jsx';
import {Pokemox} from './components/PokemonInfo/Pokemox.jsx';
import {Error} from './Error';
  
export const router=createBrowserRouter([    
    {
      path: "/",
      element: <App />,
      errorElement: <Error />
    },  
    {
        path:"/:poknum",
        element:<App />,
        errorElement:<Error />        
    },
    {
      path:"/Pokemon/:data",
      element:<Pokemon />,
      errorElement:<Error />
    },
    {
      path:"/Pokemox/:data",
      element:<Pokemox />,
      errorElement:<Error />
    }        
  ]);
  