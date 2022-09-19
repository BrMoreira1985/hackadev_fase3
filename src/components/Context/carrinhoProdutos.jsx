import { createContext, useState } from "react";
import { dados } from "../Data/data";

export const CarrinhoContext = createContext();

export function CarrinhoContextProvider({ children }) {
  const [data, setData] = useState(dados);
  const [selectItens, setSelectItens] = useState([]);

  function adicionarItem(value, roupa) {
    let NovaRoupa = copia(roupa);
    setSelectItens((prev) => [...prev, { ...NovaRoupa, selectSize: value }]);
  }

  function excluir(index) {
    console.log(index)
    setSelectItens(selectItens?.filter((NovaRoupa, key) => NovaRoupa.id !== index));
  }

  function copia (roupa){
    let thisCopia = {
    id: `${roupa.id}${Date.now()}`,
    image: roupa.image,
    nome: roupa.nome,
    descricao: roupa.descricao,
    descricaoBojo: roupa.descricaoBojo,
    descricaoMaterial: roupa.descricaoMaterial,
    precoOriginal: roupa.precoOriginal,
    precoDesconto: roupa.precoDesconto,
    desconto: roupa.desconto,
    parcelamento: roupa.parcelamento,
    descricaoTamanho: roupa.descricaoTamanho,
    size: roupa.size,
    buttonSacola: roupa.buttonSacola,
    selectSize: roupa.selectSize
    }

    return thisCopia;
  }

  return (
    <CarrinhoContext.Provider
      value={{ selectItens, setSelectItens, setData, adicionarItem, excluir }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

