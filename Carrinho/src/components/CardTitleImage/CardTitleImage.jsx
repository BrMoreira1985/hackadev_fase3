import React, { useEffect, useState } from "react";

import { faHeartCirclePlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

import "./CartTitleImage.css";
import Image from "../img/Animal Print -mini.jpg";
import Image2 from "../img/Lisa-mini.jpg";

const valorInicial = 85;

const CartTitleImage = () => {
  let [quantity, setQuantity] = useState(1);
  const [priceNormal, setpriceNormal] = useState(valorInicial);

  useEffect(() => {
    setpriceNormal(parseFloat((valorInicial * quantity).toFixed(2)));
  }, [quantity]);

  if (quantity < 1) {
    alert("Você deseja excluir o produto?");
    quantity = 1;
  }

  function adicionar() {
    setQuantity(quantity + 1);
  }

  function diminuir() {
    if (quantity < 0) return;
    setQuantity(quantity - 1);
  }

  return (
    <>
      {/* Título */}
      <div className="card-title">
        <h2 className="main-title">CARRINHO DE COMPRAS</h2>
      </div>

      {/* Card Imagem */}
      <div className="card-image">
        {/* Delete e Like */}
        <div className="card-icons">
          <FontAwesomeIcon icon={faX} className="delete-like-buttons" />
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            className="delete-like-buttons"
          />
        </div>

        {/* Imagem e descrição */}
        <div className="card-image-description">
          <img src={Image} alt="" />
          <h3>Animal Print</h3>
        </div>

        {/* Quantidade */}
        <div className="add-sub-quantity">
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={() => setQuantity(quantity + 1)}
            className="add-sub-buttons"
          />
          <p>{quantity}</p>
          <FontAwesomeIcon
            icon={faCircleMinus}
            onClick={() => setQuantity(quantity - 1)}
            className="add-sub-buttons"
          />
        </div>

        {/* Preço com desconto */}
        <div className="card-with-discount">
          <h3 className="discount-price">R$ 71,92</h3>
          <h3 className="normal-price">R$ 89,90</h3>
          <h3 className="discount">-20%</h3>
        </div>
      </div>

      {/* Card Imagem */}
      <div className="card-image">
        {/* Delete e Like */}
        <div className="card-icons">
          <FontAwesomeIcon icon={faX} className="delete-like-buttons" />
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            className="delete-like-buttons"
          />
        </div>

        {/* Imagem e descrição */}
        <div className="card-image-description">
          <img src={Image2} alt="" />
          <h3>Lisa</h3>
        </div>

        {/* Quantidade */}
        <div className="add-sub-quantity">
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={() => setQuantity(quantity + 1)}
            className="add-sub-buttons"
          />
          <p>{quantity}</p>
          <FontAwesomeIcon
            icon={faCircleMinus}
            onClick={() => setQuantity(quantity - 1)}
            className="add-sub-buttons"
          />
        </div>

        {/* Preço */}
        <div className="card-normal-price">
          <h3>R$ {priceNormal},00</h3>
        </div>
      </div>
    </>
  );
};

export default CartTitleImage;
