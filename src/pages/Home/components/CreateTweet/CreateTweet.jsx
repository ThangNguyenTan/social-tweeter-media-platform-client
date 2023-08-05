import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./create-tweet.css";

const CreateTweetSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const CreateTweet = () => {
  return (
    <div className="create-tweet box-item">
      <div className="create-tweet__container box-item__container">
        <div className="create-tweet__header box-item__header">
          <h4>Tweet something</h4>
        </div>
        <div className="create-tweet__content box-item__content">
          <div className="create-tweet__profile-image left">
            <img src="/assets/profile.jpg" className="img-fluid" alt="" />
          </div>
          <div className="create-tweet__form right">
            <Formik
              initialValues={{
                content: "",
              }}
              validationSchema={CreateTweetSchema}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <Field
                    name="content"
                    type="text"
                    className="form-control"
                    placeholder="What’s happening?"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="create-tweet__footer box-item__footer">
          <div className="left"></div>
          <div className="right">
            <button className="btn btn-primary">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
