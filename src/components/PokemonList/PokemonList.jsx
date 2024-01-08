import {useState,useEffect} from 'react';
import axios from 'axios';
import {PokemonCard} from "./Card";
import {Link} from 'react-router-dom';

export function PokemonList({nom}) {  
  let url="";
  let urld="";
  let fornum=true;  
  if(Number.isInteger(parseInt(nom))){
    url='https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + parseInt(nom-1);    
    urld='https://pokeapi.co/api/v2/pokemon-species?limit=10&offset=' + parseInt(nom-1);
  }else{
    url='https://pokeapi.co/api/v2/pokemon/'+nom;    
    urld='https://pokeapi.co/api/v2/pokemon-species/'+nom;
    fornum=false;
  }
  const [listPokemon,setListPokemon]=useState([]);
  const [listPokemonD,setListPokemonD]=useState([]);
  useEffect(()=>{  
        const requestPokemonDetail=async(pokemonObjects,d)=>{
          const detailedPokemonList=await Promise.all(
            pokemonObjects.map(async (pokemonObject)=>{
              const pokemonDetail=await axios.get(pokemonObject.url)
              return pokemonDetail.data;
            })
          );
            if(d){
              setListPokemonD(detailedPokemonList);
            }else{
              setListPokemon(detailedPokemonList);
            }
        };
        const fetchPokemonList=async()=>{
          try{            
            const response = await axios.get(url);
            const pokemonObjects=response?.data?.results;                                                
            requestPokemonDetail(pokemonObjects,false);            
            
          }catch (error){
            console.log(error);
            requestPokemonDetail([error],false);
          }
        }
        const fetchPokemon=async(url,d)=>{
          try{  
            const apokemonObjects=[];
            const response = await axios.get(url);            
            const pokemonObjects=response?.data;                                              
            apokemonObjects.push(pokemonObjects);
            if(d){
              setListPokemon(apokemonObjects);  
            }else{
              setListPokemonD(apokemonObjects);
            }
          }catch (error){
            console.log(error);
            if(d){setListPokemon([error]);}else{setListPokemonD([error]);}             
          }
        }
        const fetchDescript=async(urld)=>{
          try{              
            const response = await axios.get(urld);            
            const pokemonObjects=response?.data?.results; 
            requestPokemonDetail(pokemonObjects,true);
            
          }catch (error){
            console.log(error);
            requestPokemonDetail([error],true);             
          }
        }
        if(fornum){
          fetchPokemonList();
          fetchDescript(urld);
        }else{
          fetchPokemon(url,true);
          fetchPokemon(urld,false);
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
    console.log("***")
    console.log(listPokemonD[0]?.code) 
    
      
    
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
          descripcion={listPokemonD[index]?.flavor_text_entries[1]?.flavor_text}
          crecimiento={listPokemonD[index]?.growth_rate?.name} 
          habitat={listPokemonD[index]?.habitat?.name}
        />  
        </Link>              
        )}
    </div>
   ))}
    </div>
  )
}






