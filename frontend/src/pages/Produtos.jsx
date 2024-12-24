import React, { useState, useEffect } from 'react';
import api from '../api'
import Produto from '../components/Produto'
import "../styles/produtos.css"
import { Link } from "react-router-dom"

function Produtos() {

    const [produtos, setProdutos] = useState([])
    const [nomeProduto, setNomeProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState()

    useEffect(() => {
        getProdutos()
    }, [])

    const getProdutos = () => {
        api.get('/api/produtos/')
            .then((res) => res.data)
            .then((data) => { setProdutos(data); console.log(data) })
            .catch((err) => alert(err))
    }

    const createProduto = (e) => {
        e.preventDefault()
        api.post('/api/produtos/', {nomeProduto, descricaoProduto, precoProduto})
        .then((res) => {
            if (res.status === 201){
                alert('Produto adicionado')
            }
            else{
                alert('Não foi possível adicionar o produto')
            }
            getProdutos()
        }).catch((err) => alert(err))
    }

    return <div className='container'>
        <h1>Produtos - <Link to={"/"}>Retornar para Home</Link></h1>
        <div className="prod_form">
            <h2>Adicionar produto</h2>
            <form onSubmit={createProduto}>
                <label htmlFor="nome ">Nome:</label>
                <br />
                <input type="text" id='nome' name='nome' required onChange={(e) => setNomeProduto(e.target.value)} value={nomeProduto}/>
                <br />
                <label htmlFor="descricao">Descrição:</label>
                <br />
                <input type="text" id='descricao' name='descricao' required onChange={(e) => setDescricaoProduto(e.target.value)} value={descricaoProduto}/>
                <br />
                <label htmlFor="preco">Preço:</label>
                <br />
                <input type="number" name="preco" id="preco" maxLength={9} required onChange={(e) => setPrecoProduto(e.target.value)} value={precoProduto}/>
                <br />
                <input className='btn_sub' type="submit" value="Submit" />
            </form>
        </div>
        <div className="container_produtos">
        {produtos ? produtos.map((produto) => <Produto produto={produto} key={produto.id}/>) : 'Carregando...'}
        </div>
    </div>
}

export default Produtos;