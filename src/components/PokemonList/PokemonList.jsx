import {useState,useEffect} from 'react';
import axios from 'axios';
import PokemonCard from "./Card";


export default function PokemonList() {
  const url='https://pokeapi.co/api/v2/pokemon?limit=10';
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
        
        fetchPokemonList();
        
  },[]);
    
  return (
    
    <div className="contenido"> 
    {console.log(listPokemon)}    
   {listPokemon.map((dato,index)=>(
    <div key={index}>
    {listPokemon.length > 0 && (
        <PokemonCard imagen={dato?.sprites.front_shiny} nombre={dato?.name} num={dato?.id}/>        
        )}
    </div>
   ))}
    </div>
  )
}
