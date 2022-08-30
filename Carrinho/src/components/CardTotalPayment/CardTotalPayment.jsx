import React from "react";

import Cart from "../img/Carrinho-pagamentos.png";
import "./CardTotalPayment.css";

const CardTotal = () => {
  return (
    <>
      {/* Card Total */}
      <div className="card-total">
        <h2>Total</h2>
        <div className="second-total">
          <p>Total:</p>
          <p>
            <b>R$ 256,92</b>
          </p>
        </div>
        <div className="continue-button">Continuar</div>
      </div>

      {/* Card Pagamento */}
      <div className="card-payment">
        <h2>Métodos de pagamento</h2>
        <img src={Cart} className="payment-methods" alt="" />
        <h2>Proteção ao consumidor</h2>
        <p>
          Recupere o seu reembolso se o artigo não for entregue ou não estiver
          de acordo com a descrição
        </p>
      </div>
    </>
  );
};

export default CardTotal;
