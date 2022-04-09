import React from "react";
import Avarat from "./Avatar";
import Detail from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avarat img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
