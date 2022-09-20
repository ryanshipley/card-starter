import React from 'react'
import CardBody from './CardBody'
import CardImage from './Cardimage'
//create the component
const Card1 = (props) => {
    console.log("Props: ", props);
return (
  <div className="card" style={ {width: "18rem"} }>
  <CardImage img={props.img}/>
  <CardBody title={props.title} text={props.text}/>
</div>
  );
};

//export the component 
export default Card1