import {useState,useEffect} from 'react';
import axios from 'axios';
import {PokemonCard} from "./Card";
import {Link} from 'react-router-dom';

export function PokemonList({nom}) {
  let url="";
  let fornum=true;
  if(Number.isInteger(parseInt(nom))){
    url='https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + parseInt(nom-1);
  }else{
    url='https://pokeapi.co/api/v2/pokemon/'+nom;
    fornum=false;
  }
  const [listPokemon,setListPokemon]=useState([]);
  useEffect(()=>{  
        const requestPokemonDetail=async(pokemonObjects)=>{
          const detailedPokemonList=await Promise.all(
            pokemonObjects.map(async (pokemonObject)=>{
              const pokemonDetail=await axios.get(pokemonObject.url)
              return pokemonDetail.data;
            })
          );
            setListPokemon(detailedPokemonList);
        };
        const fetchPokemonList=async()=>{
          try{            
            const response = await axios.get(url);
            const pokemonObjects=response?.data?.results;                                                
            requestPokemonDetail(pokemonObjects);            
            
          }catch (error){
            console.log(error);
          }
        }
        const fetchPokemon=async(url)=>{
          try{  
            const apokemonObjects=[];
            const response = await axios.get(url);            
            const pokemonObjects=response?.data;                                    
            apokemonObjects.push(pokemonObjects);
            setListPokemon(apokemonObjects);  
            
          }catch (error){
            console.log(error);
          }
        }
        if(fornum){
          fetchPokemonList();
        }else{
          fetchPokemon(url);
        }
  },[]);

    const ceros=(longitud)=>{
      let url="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
      switch(longitud){
        case 1:url+="00";break;
        case 2:url+="0";break;
        default:url;
      }return url;
    }
    

  return (
    
    <div className="contenido">     
   {listPokemon.map((dato,index)=>(
    <div key={index}>
    {listPokemon.length > 0 && (       
      <Link to={`/Pokemon/${dato?.id}`}>
        <PokemonCard 
          tipo={dato?.types}
          imagen={ceros((String(dato?.id)).length)+dato?.id+".png"}
          nombre={dato?.name} 
          num={dato?.id}          
        />  
        </Link>              
        )}
    </div>
   ))}
    </div>
  )
}
