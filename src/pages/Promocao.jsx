import { Link } from "react-router-dom"
import Navegacao from "../componentes/Navegacao"
import Exibidor from "../componentes/Exibidor"
import ProdutosExemplo from "../data/ProdutosExemplo"

export default function Promocao() {
  return (
    <>
      <Navegacao titulo="VITRINE">
        <Link to="/"> Inicio </Link>
        <Link to="/promocao"> Promocao </Link>
        <Link to="/carrinho"> Carrinho </Link>
      </Navegacao>

      {
        ProdutosExemplo.map(function(produto) {

          if (produto.promocao)
            return (
              <Exibidor
                key={produto.codigo}
                produto={produto}
              />
            )

        })
      }

    </>
  )
}