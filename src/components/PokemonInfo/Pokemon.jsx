import {useState,useEffect} from 'react';
import axios from 'axios';
import './Pokemon.css';
import {useParams} from 'react-router-dom';
import { PokeinfoCard } from './PokeinfoCard';

export function Pokemon() {
  let url="";
  let eurl="";
  const {data} = useParams(); 
  url='https://pokeapi.co/api/v2/pokemon/'+data;
  eurl='https://pokeapi.co/api/v2/pokemon-species/'+data;
  const [listPokemon,setListPokemon]=useState([]);
  const [listEvo,setListEvo]=useState([]);
  const [listName,setListName]=useState([]);
  useEffect(()=>{          
        const fetchPokemon=async(url)=>{
          try{  
            const apokemonObjects=[];
            const response = await axios.get(url);            
            const pokemonObjects=response?.data;                                    
            apokemonObjects.push(pokemonObjects);
            setListPokemon(apokemonObjects);  
            
          }catch (error){
            console.log(error);
            setListPokemon([error]);
          }
        }

        const fetchEvo=async(url)=>{
          try{  
            const apokemonObjects=[];
            const apokemonNames=[];
            const response = await axios.get(url);            
            const pokemonObjects=response?.data?.evolution_chain?.url;                                    
            const responses = await axios.get(pokemonObjects);    
            const firstlevel=responses?.data?.chain?.species?.url;  
            const firstname=responses?.data?.chain?.species?.name;
            apokemonNames.push(firstname);
            apokemonObjects.push(ceros(extraenum(firstlevel).length)+extraenum(firstlevel)+".png");
            let levels=responses?.data?.chain?.evolves_to;            
            while(levels?.length>0){   
              apokemonNames.push(levels[0]?.species?.name);           
              apokemonObjects.push(ceros(extraenum(levels[0]?.species?.url).length)+extraenum(levels[0]?.species?.url)+".png");
              levels=levels[0]?.evolves_to;
            }           
            setListEvo(apokemonObjects);  
            setListName(apokemonNames);
            
          }catch (error){
            console.log(error);
            setListEvo([error]);
            setListName([error]);
          }
        }
        
          fetchPokemon(url);
          fetchEvo(eurl);
        
  },[]);
  const ceros=(longitud)=>{
    let url="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    switch(longitud){
      case 1:url+="00";break;
      case 2:url+="0";break;
      default:url;
    }return url;
 }
 
 const extraenum=(url)=>{
  if(url){
    var numero=url.match(/\/(\d+)\/$/);
    var extraido;
    if(numero){
      extraido=numero[1];
    }return extraido;
  }
 }
 console.log("listPokemon: ");
 console.log(listPokemon);
 console.log("listEvo: ");
 console.log(listName);
 
  return (
          
      <div className="contenido">     
      {listPokemon.map((dato,index)=>(        
    <div key={index}>
    {listPokemon.length > 0 && (           
      
          <PokeinfoCard 
            id={dato?.id}
            imagen={ceros((String(dato?.id)).length)+dato?.id+".png"}   
            imgsevo={listEvo}  
            nomevos={listName}         
            nombre={dato?.name}
            tipo={dato?.types}
            altura={dato?.height*10}
            peso={dato?.weight/10}
            habilidad={dato?.abilities}
            experiencia={dato?.base_experience}
          />
        
     )}
      </div>
        ))}     
      </div>
      
    
  )
}