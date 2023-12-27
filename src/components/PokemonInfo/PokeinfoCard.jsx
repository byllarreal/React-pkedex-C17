import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function updateProgressBar(exp) {
    const progressFill = document.getElementById("progress-fill");
    const [progressExp, setprogressExp]=useState("");
    useEffect(()=>{
        const progress=async()=>{   
            try{
                setprogressExp(Math.trunc(((await exp)/300)*100));
                progressFill.style.width = `${progressExp}%`;
                progressFill.innerHTML = `${await exp}%`;
            }catch (error){
                console.log(error);
            }
            
        }
        progress();
    })       
   
  }

  
  

export function PokeinfoCard(props) {      
    const getPokeinfoCard=()=>{        

        function recargar(datopoke){            
            if(datopoke===0){
                datopoke=1010
            }else if(datopoke===1011){
                datopoke=1;
            }            
            const url=window.location.origin;
            const nurl=url + "/Pokemon/" + datopoke; 
            window.location.href=nurl;
            alert(window.location.href.split('/')[3])
        }

        function rutePivot(){            
            if(window.location.href.split('/')[3]=="Pokemon"){
                return "Pokemox"
            }else{
                return "Pokemon"
            }
        }

        updateProgressBar(props.experiencia);
        

        return(
    <>
    <header>
                <h1>{props.nombre}</h1>                
                <button className="searchbutton" onClick={()=>recargar(props.id-1)}> 
                     <i className="fas fa-search">prev</i> 
                </button>      
                <Link to={`/${rutePivot()}/${props.id +1 }`}>Ir al Pokemon</Link>                 
                <button className="searchbutton" onClick={()=>recargar(props.id+1)}> 
                    <i className="fas fa-search">next</i> 
                </button>                  
                <Link to={`/${props.id}`}>Buscar</Link> 
                <div>
                    <h1>Evolution</h1>                   
                </div>
                {(props.imgsevo).map((datoi, index)=>(  
                    <div key={index} >                        
                        <img src={datoi} alt={props.nombre} />
                        <div className="centrado">
                            <h3>{props.nomevos[index]}</h3>
                        </div>
                        {index < props.imgsevo.length-1  && (           
                        <div className="centrado">
                            <img src='../Imgs/flecha-hacia-abajo.png' width={50} height={50}/>
                        </div>
                        )}
                    </div>                                                                          
                ))}
    </header>
    <div id="cuerpo">
        <div className="centrado">
            <div className="parte">
                <img src={props.imagen} alt={props.nombre} />
            </div>            
            <div className="parte centrado">                 
            <div className="progress-bar">
                <div className="progress-fill" id="progress-fill" ></div>
            </div>
            
            </div>
            <div className="parte">
            <section className="datos">
                    <h2>Datos</h2>
                    <ul>
                        <li>Nombre: {props.nombre}</li>
                        <li>Número: {props.id}</li>                                                
                        <li>Altura: {props.altura} cms</li>
                        <li>Peso: {props.peso} kg</li>                        
                        {(props.habilidad).map((datoh, index)=>(                                                                            
                            <li key={index}>Habilidad: {datoh?.ability?.name}</li>                        
                        ))}                        
                    </ul>
                </section>
            </div>
            <div className="parte">
                <section className="tipo">
                    <h2>Tipo</h2>
                    <ul>
                        {(props.tipo).map((datot, index)=>(                                                                            
                            <li key={index} className={"background-color-"+datot?.type?.name}>Tipo: {datot?.type?.name}</li>                        
                        ))}
                    </ul>                   
                </section>
            </div>
        </div>
    </div>
    
    </>
    );
}
return (
    <div className="contenido">     
        {getPokeinfoCard()}       
    </div>
  )
}