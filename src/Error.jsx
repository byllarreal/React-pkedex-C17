import {Link} from 'react-router-dom';
export function Error(){
    return(
        <div>
            <div className="centrado">
                <h3>El pokemon que buscas no existe</h3>
            </div>
            <div className="centrado">
                <img src="../Imgs/errorsaur.png" alt="" width={450}/>
            </div>
            <div className="centrado">
                <Link to='/'>
                     Ve a buscar otro
                </Link>
            </div>
        </div>
    )
}