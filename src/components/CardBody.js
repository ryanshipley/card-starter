import React from 'react'
import Button from './Button'

const CardBody = (props) => {
    //console.log("current props.title: ", props.title);
  return (
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Button url={props.url}/>
      </div>
  );
};

//export the component
export default CardBody