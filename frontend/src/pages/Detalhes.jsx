import { Link, useParams } from "react-router-dom"
import "../styles/detalhes.css"

function Detalhes(){
    const {inputValue} = useParams();
    
    if (!inputValue){
        return <div className="detail">
            <h1>Nenhum valor foi informado</h1>
            <Link to={"/"}>Retornar para Home</Link>
        </div>
    }
    return <div className="detail">
        <h1>Detalhes</h1>
        <h3 id="mostrar">Valor passado: {inputValue || 'Nenhum valor passado'}</h3>
        <Link to={"/"}>Retornar para Home</Link>
    </div>
}

export default Detalhes