import {createBrowserRouter}from 'react-router-dom'
import App from './App.jsx'
import {Pokemon} from './components/PokemonInfo/Pokemon.jsx';
import {LoginPage} from './components/LoginPage/LoginPage.jsx'
import {PremiumPlay} from './components/Premium/PremiumPlay.jsx';
import {PremiumMusic} from './components/Premium/PremiumMusic.jsx'
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
      path:"/Login",
      element:<LoginPage />
    },
    {
      path:"/Premiumplay",
      element:<PremiumPlay />
    },
    {
      path:"/Premiummusic/:data",
      element:<PremiumMusic />
    }
  ]);
  