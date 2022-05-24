import React from "react";

function Sidebear({ text, handleText, handleFiltrText, allWatch, watchM,watchJ , allLux, discount, }) {

  return (
    <div className=""  >
      <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={text} onChange={handleText}  placeholder="Поиск по имени..."/>{" "}
          <input type="submit" onClick={handleFiltrText} value='Поиск' disabled={!text}/>
        </form>
      </div>
      <div>
        <div onClick={allWatch}>Все часы</div>
        <div onClick={watchM}>Мужские</div>
        <div onClick={watchJ}>Женские</div>
        <div onClick={allLux}>Люкс</div>
        <div onClick={discount}>Скидочные</div>
      </div>
    </div>
  );
}

export default Sidebear;
