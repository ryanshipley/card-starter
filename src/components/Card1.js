import React from 'react'
import CardBody from './CardBody'
import CardImage from './Cardimage'
//create the component
const Card1 = () => {
return (
  <div className="card" style={ {width: "18rem"} }>
  <CardImage />
  <CardBody title="Santorini"/>
</div>
  );
};

//export the component 
export default Card1