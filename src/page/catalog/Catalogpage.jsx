import React, { useState } from "react";
import initialState from "../../inirilState/catalog";
import Main from "./main/Main";
import Sidebear from "./sidebear/Sidebear";

function Catalogpage({handleCard}) {
  const [text, setText] = useState("");
  const [init, setInit] = useState(initialState);
  const [filterd, setFiltered] = useState(initialState);

  console.log(text);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleFiltrText = () => {
    setFiltered(
      init.filter(({ ...item }) =>
        item.name.toUpperCase().includes(text.toUpperCase())
      )
    );
    setText("");
  };

  const allWatch = () => {
    setFiltered(init);
    setText("");
  };

  const watchM = () => {
    setFiltered(init.filter(({ ...item }) => item.gender === "M"));
    setText("");
  };

  const watchJ = () => {
    setFiltered(init.filter(({ ...item }) => item.gender === "J"));
    setText("");
  };

  const allLux = () => {
    setFiltered(init.filter(({ ...item }) => item.price > 45000));
  };

  const discount = () => {
    setFiltered(init.filter(({ ...item }) => item.oldPrice))
  }
  const [dirty, setDirty] = useState(false)
  console.log(dirty);
  const discription =(e) => {
      setDirty(true)
    
  }


  return (
    <div className="wrap"> 
      <div className="sidebear">
        <Sidebear
          text={text}
          handleText={handleText}
          handleFiltrText={handleFiltrText}
          allWatch={allWatch}
          watchM={watchM}
          watchJ={watchJ}
          allLux={allLux}
          discount={discount}

        />
      </div>
      <div className="main_con">
        {filterd.map((watch, id) => {
          return (
            <Main
            onFocus={discription}
              key={id}
              src={watch.img}
              name={watch.name}
              price={watch.price}
              oldPrice={watch.oldPrice}
              dirty={dirty}
              id={id}
              handleCard={handleCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catalogpage;
