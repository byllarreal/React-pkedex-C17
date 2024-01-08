import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import {Pokemon} from './components/PokemonInfo/Pokemon.jsx';
import {LoginPage} from './components/LoginPage/LoginPage.jsx';
import {PremiumPlay} from './components/Premium/PremiumPlay.jsx';
import {PremiumMusic} from './components/Premium/PremiumMusic.jsx';
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute.jsx';
import {BarraNav} from './components/Navegar/BarraNav.jsx';
import {Error} from './Error.jsx';
import { Button } from "react-bootstrap";





function Appx(){
    const [user,setUser]=useState(null); 

    const login=()=>{
        setUser({
            id:1,
            name:"usuario",
            permissions:['vip']
        })
      }
    
      const logout=()=>setUser(null);
    return(
        <>
        
        <BrowserRouter>
            <Navigation />
            {
                user ? (
                    <Button variant="primary" onClick={logout}>
                        Log out
                    </Button>                    
                ):(
                    <Button variant="primary" onClick={login}>
                        Log in
                    </Button> 
                )
            }
            <Routes>                
                <Route path="/" element={<App />} />
                <Route path="/:poknum" element={<App />} />
                <Route path="/Pokemon/:data" element={<Pokemon />} />
                <Route path="/Login" element={<LoginPage />}/>
                <Route element={<ProtectedRoute isAllowed={!!user}/>}>
                    <Route path="/Premiumplay" element={<PremiumPlay />}/>
                </Route>
                <Route path="/Premiummusic/:data" element={
                    <ProtectedRoute isAllowed={!!user && user.permissions.includes('vip')}>
                        <PremiumMusic />
                    </ProtectedRoute>
                }/>  
                <Route path="/Error" element={<Error />} />                           
            </Routes>
                
        </BrowserRouter>
        
        </>
    );
}

function Navigation(){
    return <BarraNav />
}

export default Appx