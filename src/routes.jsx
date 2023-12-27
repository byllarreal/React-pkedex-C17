import {createBrowserRouter}from 'react-router-dom'
import App from './App.jsx'
import {Pokemon} from './components/PokemonInfo/Pokemon.jsx';
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
    }
  ]);
  