// Signup page
import React from "react";


export default function Signup(props) {    //use props in function

  return (
    <>
      <form className="signup mb-3 container">
        <h1>SIGN UP</h1>
        <br />
        <button className="mb-2"
          onClick={() => {
            props?.setName((prev) => {
              return { ...prev, signup: false, customer: true }; //this pass customer in props
            });
          }}
        >
          Customer
        </button>

        <br />
        <button className="mb-2"
          onClick={() => {
            props?.setName((prev) => {
              return { ...prev, signup: false, photographers: true }; //This pass photographer in props
            });
          }}
        >
          Photographer
        </button>
      </form>
    </>
  );
}
