import React,{useContext} from "react";
import Card from "./Card";
import {GlobalContext} from '../context/GlobalState'

function createCard(contact) {

return (
    <Card
    id={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
);
}

function Cards() {
    const {contacts}=useContext(GlobalContext);
return (
    <div>
    {contacts.map(createCard)}

    </div>
);
}

export default Cards;
