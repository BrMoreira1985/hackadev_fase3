import { Routes, Route } from "react-router-dom";
import Showcase from "./components/showcase";
import Catalog from "./components/catalog";
import Voltar from "./components/voltar/index";
import Quemsomos from "./pages/quemsomos";
import Seguranca from "./pages/seguranca";
import Envio from "./pages/envio";
import TrocaeDevolucao from "./pages/trocaedevolucao";
import Cuidados from "./pages/cuidados";
import FaleConosco from "./pages/faleconosco";
import Login from "./components/Login/index";
import Cadastro from "./components/Cadastro/index";
import Cards from "./components/Card/src/Cards";
import Checkout from "./components/Checkout/src/Checkout";

export default function Rotas() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Showcase />
            <Catalog />
            <Voltar />
          </>
        }
      />

      <Route
        path="/quemsomos"
        element={
          <>
            <Quemsomos />
          </>
        }
      />

      <Route
        path="/seguranca"
        element={
          <>
            <Seguranca />
          </>
        }
      />

      <Route
        path="/envio"
        element={
          <>
            <Envio />
          </>
        }
      />

      <Route
        path="/trocaedevolucao"
        element={
          <>
            <TrocaeDevolucao />
            <Voltar />
          </>
        }
      />

      <Route
        path="/cuidados"
        element={
          <>
            <Cuidados />
          </>
        }
      />

      <Route
        path="/faleconosco"
        element={
          <>
            <FaleConosco />
          </>
        }
      />

      <Route
        path="/cadastro"
        element={
          <>
            <Cadastro />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />

      <Route
        path="/card/:id"
        element={
          <>
            <Cards />
          </>
        }
      />

      <Route
        path="/checkout"
        element={
          <>
            <Checkout />
          </>
        }
      />
    </Routes>
  );
}
