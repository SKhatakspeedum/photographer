import React from "react";
import { useState } from "react";
// import Customer from './Customer';

export default function Signup(props) {
  const [name1, setName1] = useState();

  return (
    <>
      <form className="signup mb-3 container">
        <h1>SIGN UP</h1>
        <br />
        <button className="mb-2"
          onClick={() => {
            props?.setName((prev) => {
              return { ...prev, signup: false, customer: true };
            });
          }}
        >
          Customer
        </button>

        <br />
        <button className="mb-2"
          onClick={() => {
            props?.setName((prev) => {
              return { ...prev, signup: false, photographers: true };
            });
          }}
        >
          Photographer
        </button>
      </form>
    </>
  );
}
