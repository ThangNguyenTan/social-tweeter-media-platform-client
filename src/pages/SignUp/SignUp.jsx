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
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import "./sign-up.css";
import { signinGoogle, signup } from "../../apis";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../../constants";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const responseGoogle = async (response) => {
    console.log(response);
    try {
      const res = await axios.get(`${SERVER_URL}/api/auth/google/callback`, {
        params: { ...response },
      });
      console.log(res.data.token);
    } catch (error) {
      console.error("Google authentication failed:", error);
    }
  };

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => responseGoogle(tokenResponse),
  });

  const signInGoogleHandler = () => {
    login();
  };

  return (
    <div id="sign-up-page" className="auth-form">
      <div className="auth-form__container">
        <div className="auth-form__top-image">
          <img className="img-fluid" src="/assets/tweeter.svg" alt="Logo" />
        </div>
        <div className="auth-form__title">
          <h1>Join thousands of learners from around the world </h1>
        </div>
        <div className="auth-form__description">
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
        <div className="auth-form__content">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              const response = await signup(values);
              if (response.success) {
                toast.success(
                  `${response.message}. You will be redirected to login page.`
                );
                setTimeout(() => {
                  navigate("/");
                }, 2000);
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
                  Start coding now
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="auth-form__oauth">
          <p>or continue with these social profile</p>
          <ul className="oauth__list">
            <li className="oauth__list__item" onClick={signInGoogleHandler}>
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
            Already a member? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
