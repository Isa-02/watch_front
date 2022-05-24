import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ src, name, price, oldPrice, dirty, params, options }) {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([
    { text: "Остался доволен покупкой" },
    { text: "Неубиваемые!" },
  ]);
  const [about, setAbout] = useState(false);
  const [buy, setBuy] = useState("Купить");
  const [buyDis, setBuyDis] = useState(false);

  const handleTe = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setAbout(false);
    }
  };

  const handleCom = () => {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].text === text) {
        return setAbout(true);
      }
    }

    if (text) {
      setComments([
        {
          text: text,
        },
        ...comments,
      ]);
      setText("");
    }
  };
  const handleBuy = () => {
    setBuy("В корзине");
    setBuyDis(true);
  };
  const resBuy = () => {
    setBuy("Купить")
    setBuyDis(false)
  }

  return (
    <div className="card_watch">
      <div>
        <Link to="/">  Назад </Link>
      </div>
      <div className="top_card">
        <div>
          <div>
            <img src={src} alt={name} />
          </div>
        </div>
        <div className="inf">
          <div>{name}</div>
          <div>{price}</div>
          <div>{oldPrice}</div>
        </div>
        <div>
          <input
            type="button"
            value={buy}
            onClick={handleBuy}
            disabled={buyDis}
          />
          {(buyDis) &&<div onClick={resBuy}>Удалить из корзины</div>}
        </div>
      </div>
      <div className="but">
        <div className="params_watch">
          <div>Параметры</div>
          <ul>
            <li>
              <div>Часы</div>
              <div>{params.watch}</div>
            </li>
            <li>
              <div>Тип механизма</div>
              <div>{params.type}</div>
            </li>
            <li>
              <div>Материал</div>
              <div>{params.mater}</div>
            </li>
            <li>
              <div>Пол</div>
              <div>{params.gen}</div>
            </li>
            <li>
              <div>Водозащита</div>
              <div>{params.waterproof}</div>
            </li>
            <li>
              <div>Стекло</div>
              <div>{params.glass}</div>
            </li>
            <li>
              <div>Гарантия</div>
              <div>{params.garant}</div>
            </li>
            <li>
              <div>Диаметр</div>
              <div>{params.diametr}</div>
            </li>
          </ul>
        </div>
        <div className="options_watch">
          <div>Описание </div>
          <div>{options}</div>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={text}
              onChange={handleTe}
              placeholder="Написать комментарий..."
            />
            <input type="submit" onClick={handleCom} disabled={!text} />
            {about && <div>Нельзя публиковать одинаковый комментарий!</div>}
          </form>
          <div>Комментарии:</div>
          {comments.map((comment, index) => (
            <div key={index}>{comment.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
