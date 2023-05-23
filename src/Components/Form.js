import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Form = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [image,setImage]=useState("");

    const {addContact,contacts}=useContext(GlobalContext);

    function add(e){
        e.preventDefault();
        const cont={
          id:contacts.length+1,
          name,
          imgURL:image,
          mobile,email
        }
        console.log(cont)
        addContact(cont);
      }

  return (
    <form onSubmit={add}>
    <h3>Add Contact</h3>
        <label>Name: </label>
        <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='Enter Name'></input>
        <label>Email: </label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter Email'></input>
        <br/>
        <label>Mobile: </label>
        <input onChange={(e)=>setMobile(e.target.value)} value={mobile} type='text' placeholder='Enter Mobile Number'></input>
        <label>ImageURL</label>
        <input onChange={(e)=>setImage(e.target.value)} value={image} type='text' placeholder='Enter ImageURL'></input>
        <br/>
        <button>Submit</button>
    </form>
  )
}

export default Form