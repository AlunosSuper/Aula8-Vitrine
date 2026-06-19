import {Link, useParams} from 'react-router-dom';
import Navegacao from '../componentes/Navegacao';
import Exibidor from '../componentes/Exibidor';
import ProdutosExemplo from '../data/ProdutosExemplo';


export default function Produto() {
    const { codigo } = useParams();
    

    return (
        <>
        <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      <Exibidor produto={ProdutosExemplo.find((produto) => produto.codigo == codigo)} />
    </>
  )
}
