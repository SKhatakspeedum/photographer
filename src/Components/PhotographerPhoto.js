import React, { useState } from "react";

export default function PhotographerPhoto(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <form className="signup container">
        <h4>Uploaad photo</h4>
        <div>
          <h1>Profile PIC</h1>
          {selectedImage && (
            <div>
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>   
            </div>
          )}
          <br />
          <br />
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);

              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>

        <div>
          <button
            className="mr-3"
            onClick={() => {
              props?.setName((prev) => {
                return {
                  ...prev,
                  photographercitylanguage: true,
                  photographerphoto: false,
                };
              });
            }}
          >
            Prev
          </button>

          <button
            className="mr-3"
            onClick={() => {
              props?.setName((prev) => {
                return { ...prev, photographerphoto: false, thanks: true };
              });
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
