import React from "react";
import { useFormik } from "formik";
import { signUPSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Customer(props) {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUPSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
        props?.setName((prev) => {
          return { ...prev, customer: false, thanks: true };
        });
      },
    });

  return (
    <>
      <form className="signup container" onSubmit={handleSubmit}>
        <h2>Customer</h2>
        <div>
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <p>{errors.password}</p>}
        </div>
        <div>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password && (
            <p>{errors.confirm_password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
        <br />
        <div>
          <button
            className="mr-3"
            onClick={() => {
              props?.setName((prev) => {
                return { ...prev, customer: false, signup: true };
              });
            }}
          >
            Prev
          </button>
        </div>
      </form>
    </>
  );
}
