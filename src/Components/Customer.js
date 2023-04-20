import React from "react";
import { useState } from "react";

export default function Customer(props) {
  // const [name2,setName2]=useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function handleInputChange1(event) {
    setName(event.target.value);
  }
  function handleInputChange2(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.length === 0) {
      alert("Text is empty");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      alert("Text contains non-alphabetic characters");
    } else {
      alert("Text is valid");
    }
    
    if (email.length === 0) {
      alert("Email is empty");
    } else if (!/^[A-Za-z]+$/.test(email)) {
      alert("Text contains non-alphabetic characters");
    } else {
      alert("Email is valid");
    }
  }

  return (
    <>
      <form className="signup container" onSubmit={handleSubmit}>
        <h2>Custopmer</h2>
        <label>
          Name:
          <input
            type="text"
            pattern="[A-Za-z]+"
            onChange={handleInputChange1}
            value={name}
          />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleInputChange2} />
        </label>
        {/* <label>
        password:
        <input type="password" value={password} onChange={(event) => setpassword(event.target.value)} />
      </label> */}
        <button type="submit">Submit</button>
        <br />
        {/* <div>
     
      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, customer :false, signup:true}
        })
      }}>
        Prev
      </button>

      <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, customer :false, thanks:true}
        })
      }}>
        Sign Up 
      </button>
      </div> */}
      </form>
    </>
  );
}
