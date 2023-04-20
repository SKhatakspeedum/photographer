import React from 'react'
import { useState } from 'react';

export default function Photographers(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the collected data, like sending it to a server or storing it in a state management system.
  };


  return (
    <>
        <form  className='signup container' onSubmit={handleSubmit}>
        <h1>Photographers</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>

      <div>
      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographers :false, signup:true}
        })
      }}>
        Prev
      </button>

      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographers:false, photographercitylanguage:true}
        })
      }}>
        Next 
      </button>  
      </div>
    </form>
    </>
  )
}