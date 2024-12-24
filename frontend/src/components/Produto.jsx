import React from "react";
import "../styles/produto.css"

function Produto({produto}){
    return <div className="produto">
        <h4>Produto {produto.id}</h4>
        <p className="nome">{produto.Nome}</p>
        <p className="descricao">{produto.Descricao}</p>
        <p className="preco">R${produto.Preco}</p>
    </div>
}

export default Produto