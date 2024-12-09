import Num from "./Num";
import "./Ranking.css";
import React from "react";



const Ranking = () => {
  return (
    <section className="ranking">
      <div className="layoutRanking">
        <h1 id="titleRanking">Ranking Mensal</h1>
        <div className="users-ranking">
          <Num
            nome="Aqui é você no futuro"
            colocacao="1"
            stroke="#EE9B11"
            dotColor="#F9D504"
            bg="#F9D504"
            color="#1e1d1d"
          />
          <Num
            nome="KyanMaloca"
            colocacao="2"
            stroke="#7100B2"
            dotColor="#7100B2"
            bg="#7100B2"
            color="#1e1d1d"
          />
          <Num
            nome="takeshi_SixNine"
            colocacao="3"
            stroke="#3D1B11"
            dotColor="#3D1B11"
            bg="#3D1B11"
            color="#fff"
          />
          <Num
            nome="CactusJack"
            colocacao="4"
            stroke="#1E1D1D"
            color="#fff"
            bg="#1e1d1d"
          />
          <Num
            nome="MuuhPro"
            colocacao="5"
            stroke="#1E1D1D"
            color="#fff"
            bg="#1e1d1d"
          />
        </div>
        <div className="see-all">
          <a href="#"><span>Ver todos</span></a>
        </div>
      </div>
    </section>
  );
};

// const [items, setItems] = useState([0, 1, 2, 3])

// return (
//   <Reorder.Group axis="y" values={items} onReorder={setItems}>
//     {items.map((item) => (
//       <Reorder.Item key={item} value={item}>
//         {item}
//       </Reorder.Item>
//     ))}
//   </Reorder.Group>
// )

export default Ranking;
