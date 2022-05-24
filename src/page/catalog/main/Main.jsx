import React,{useState} from "react";
import {Link} from 'react-router-dom'

function Main({src, name, price, oldPrice, dirty, id, handleCard}) {


  return (
    <div className="main_card">
      <div>
        <img src={src} alt={name} />
      </div>
      <div className="price">
        <div>{name}</div>
        <div>
          <div>{oldPrice}</div>
          <div>{price}</div>
        </div>
      {(!dirty) && <div > <Link to="/card" onClick={() => handleCard(id)}> Перейти </Link></div> }
      </div>
    </div>
  );
}

export default Main;
