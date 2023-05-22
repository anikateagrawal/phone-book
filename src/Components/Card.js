import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  const {deleteContact}=useContext(GlobalContext);
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        <button onClick={()=>deleteContact(props.id)}>X</button>
      </div>
    </div>
  );
}

export default Card;
