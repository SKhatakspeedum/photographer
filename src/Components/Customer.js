import React from 'react'
import { useState } from 'react';

export default function Customer(props) {
  const [name2,setName2]=useState();

  return (
    <>
      <form className='signup container'>
        <h1>Custopmer</h1>
      <label>
        Username_1:
        <input type="text" />
      </label>
      <br />
      <label>
        Password_1:
        <input type="text"/>
      </label>
      <br />
      <div>
      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, customer :false, thanks:true}
        })
      }}>
        Sign Up 
      </button>
      <button onClick={() => {
        props?.setName((prev)=>{
          return {...prev, customer :false, signup:true}
        })
      }}>
        Prev
      </button>
      </div>
    </form>
    </>
  )
}
