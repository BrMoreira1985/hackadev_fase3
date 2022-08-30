import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {CarrinhoContextProvider} from './context/carrinhoProdutos'



import Cards from "./Cards";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarrinhoContextProvider>
      <Cards />
    </CarrinhoContextProvider>
  </React.StrictMode>
);

