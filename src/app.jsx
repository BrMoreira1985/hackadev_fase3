import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";

import Rotas from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}
