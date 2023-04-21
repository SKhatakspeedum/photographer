import React from 'react'
import { useFormik } from 'formik';
import {photoPhoneLangCitySchema} from '../schemas/photoPhoneLangCitySchema';

const initialValues = {
  phone: "",
  city: "",
  language: "",
};


export default function PhotographerCityLanguage(props) {
  
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialValues,
    validationSchema: photoPhoneLangCitySchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      props?.setName((prev) => {
        return { ...prev, photographercitylanguage: false, photographerphoto: true };
      });
    },
  });
  
  return (
    <div>
        <form className='signup container' onSubmit={handleSubmit}>
      {/* <h4>Upload Your Image Here!</h4> */}
      <div>
          <input
            type="tel"
            autoComplete="off"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && <p>{errors.phone}</p>}
        </div>
        
      <div>
          <input
            type="name"
            autoComplete="off"
            name="city"
            id="city"
            placeholder="City"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && <p>{errors.city}</p>}
        </div>

        <div>
          <input
            type="name"
            autoComplete="off"
            name="language"
            id="language"
            placeholder="Language"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.language && touched.language && <p>{errors.language}</p>}
        </div>
        <button type="submit">Submit</button>
        <br />
      <div>
      <button
            className="mr-3"
            onClick={() => {
              props?.setName((prev) => {
                return { ...prev, photographers: true,  photographercitylanguage: false };
              });
            }}
          >
            Prev
          </button>

      {/* <button className='mr-3' onClick={() => {
        props?.setName((prev)=>{
          return {...prev, photographerphoto:true, photographercitylanguage:false}
        })
      }}>
        Next 
      </button>    */}
      </div>
      </form>
    </div>
  )
}
