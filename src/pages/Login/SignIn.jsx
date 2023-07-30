import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./sign-in.css";
import { signin } from "../../apis";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  return (
    <div id="sign-in-page" className="auth-form">
      <div className="auth-form__container">
        <div className="auth-form__top-image">
          <img className="img-fluid" src="/assets/tweeter.svg" alt="Logo" />
        </div>
        <div className="auth-form__title">
          <h1>Login</h1>
        </div>
        <div className="auth-form__content">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={async (values) => {
              const response = await signin(values);
              if (response.success) {
                toast.success(`${response.message}`);
              } else {
                toast.error(response.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="form-group form-group-icon">
                  <div className="form-group__icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="form-group__input">
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="form-group__error">
                      <p>{errors.email}</p>
                    </div>
                  ) : null}
                </div>

                <div className="form-group form-group-icon">
                  <div className="form-group__icon">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  <div className="form-group__input">
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <div className="form-group__error">
                      <p>{errors.password}</p>
                    </div>
                  ) : null}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="auth-form__oauth">
          <p>or continue with these social profile</p>
          <ul className="oauth__list">
            <li className="oauth__list__item">
              <FontAwesomeIcon icon={faGoogle} />
            </li>
            <li className="oauth__list__item">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="oauth__list__item">
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li className="oauth__list__item">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
          <p>
            Do not have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
