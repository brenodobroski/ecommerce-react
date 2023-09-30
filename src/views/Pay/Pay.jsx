/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./index.scss";

const Pay = ({ data }) => {
  const { payId } = useParams();
  const selectedProduct = data.find((product) => product.id == payId);

  async function getAdressByCep() {
    const cep = document.getElementById("cep").value;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div className="pay">
        <div className="pay__esquerda">
          <form action="">
            <label className="name" htmlFor="">
              Nome: <br />
              <input type="text" placeholder="Nome completo" />
            </label>
            <br />
            <div className="cep">
              <label htmlFor="">
                CEP: <br />
                <input
                  id="cep"
                  type="text"
                  placeholder="Digite seu CEP sem traço"
                  onInputCapture={getAdressByCep}
                />
              </label>
            </div>
            <div className="form-cima">
              <label htmlFor="" className="endereco">
                Rua: <br />
                <input id="rua" type="text" />
              </label>
              <label htmlFor="">
                Bairro: <br />
                <input id="bairro" type="text" />
              </label>
            </div>
            <div className="form-baixo">
              <label className="bairro" htmlFor="">
                Cidade: <br />
                <input id="cidade" type="text" />
              </label>
              <label htmlFor="">
                UF: <br />
                <input id="uf" type="text" />
              </label>
            </div>
          </form>

          <Link to={`/home`}>
            <button className="btn">Enviar Pedido</button>
          </Link>
        </div>

        <div className="pay__direita">
          <h1>Resumo do Pedido:</h1>

          <div className="preco">
            <p>Produtos(1)</p>
            <h2>{selectedProduct.price}</h2>
          </div>

          <div className="total">
            <p>Total:</p>
            <h2>{selectedProduct.price}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pay;
