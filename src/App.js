import React from "react";
//import "./style.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import cardsArr from "./data";

const cards = cardsArr.map((ele, index) => {
  return (
      <Card1 
          img={ele.img} 
          title={ele.title} 
          text={ele.text} 
          url={ele.url} 
      />
  );
});

console.log('this is cards:', cards);


function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        <Card1 />
        <Card2 />
      </section>
    </div>
  );
}

export default App;
