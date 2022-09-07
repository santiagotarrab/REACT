import './Boton.css';

export function Boton ({texto, esBotonDeClick, manejoClic}){
    return(
        <button className={esBotonDeClick? "boton-clic" : "boton-reiniciar"} onClick={manejoClic}>
            {texto}
        </button>
    )
}