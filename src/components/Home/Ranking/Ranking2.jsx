import Bee from "../assets/Bee";
import Num from "./Num";
import { useState } from "react";
import { Reorder } from "motion/react";

function Rank() {
  const [items, setItems] = useState([
    {
      id: 1,
      nome: "Vinicius",
      colocacao: "1",
      stroke: "#EE9B11",
      dotColor: "#EE9B11",
      bg: "#F9D504",
      color: "#1E1d1d",
    },
    {
      id: 2,
      nome: "Felipe",
      colocacao: "2",
      stroke: "#7100B2",
      dotColor: "#7100B2",
      bg: "#7100B2",
      color: "#EAEAEA",
    },
    {
      id: 3,
      nome: "Luiz Gui",
      colocacao: "3",
      stroke: "#3D1B11",
      dotColor: "#3D1B11",
      bg: "#3D1B11",
      color: "#EAEAEA",
    },
    {
      id: 4,
      nome: "Guilherme",
      colocacao: "4",
      stroke: "#1e1d1d",
      dotColor: "#1e1d1d",
      bg: "#1e1d1d",
      color: "#EAEAEA",
    },
    {
      id: 5,
      nome: "Davi",
      colocacao: "5",
      stroke: "#1e1d1d",
      dotColor: "#1e1d1d",
      bg: "#1e1d1d",
      color: "#EAEAEA",
    },
  ]);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={(newOrder) => setItems(newOrder)}
    >
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <Num
            nome={item.nome}
            colocacao={item.colocacao}
            stroke={item.stroke}
            dotColor={item.dotColor}
            bg={item.bg}
            color={item.color}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default Rank;
 