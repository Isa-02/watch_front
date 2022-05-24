import "./App.css";
import React, { useState } from "react";
import initialState from "../inirilState/catalog";

import { Routes, Route } from "react-router-dom";

import Catalogpage from "../page/catalog/Catalogpage";
import Contactspage from "../page/contacts/Contactspage";
import Cartspage from "../page/carts/Cartspage";
import Notfoundpage from "../page/Notfoundpage";
import Card from "../page/catalog/main/Card";
import Layout from "./Layout";

function App() {
  const [cards, setCards] = useState([]);

  const handleCard = (id) => {
    setCards(initialState.filter((item, index) => index === id));
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalogpage handleCard={handleCard} />} />
        <Route path="contacts" element={<Contactspage />} />
        <Route path="carts" element={<Cartspage />} />
        <Route
          path="card"
          element={cards.map((card, id) => (
            <Card
              key={id}
              src={card.img}
              name={card.name}
              price={card.price}
              oldPrice={card.oldPrice}
              params={card.params}
              options={card.opisanie}
            />
          ))}
        />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
