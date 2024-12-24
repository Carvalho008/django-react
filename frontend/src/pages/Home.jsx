import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";

function Home() {
    const [inputValue, setInputValue] = useState('')
    return <div id='container'>
        <div>
            <h1>Home</h1>
            <h3>Conteúdo da Home</h3>
            <input required type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Link to={`/detalhes/${inputValue}`}><button>Ver Detalhes</button></Link>
            <Link to={`/produtos/`}>Produtos</Link>
        </div>
    </div>
}

export default Home