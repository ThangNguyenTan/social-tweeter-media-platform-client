import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./update-settings.css";

const UpdateSettingsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
});

const UpdateSettings = () => {
  return (
    <div id="update-settings-page">
      <div className="update-settings-page__content">
        <div className="update-settings__header">
          <h1 className="update-settings__header__title">Change Info</h1>
          <p className="update-settings__header__description">
            Changes will be reflected to every services
          </p>
        </div>
        <div className="update-settings__content">
          <Formik
            initialValues={{
              name: "",
              bio: "",
            }}
            validationSchema={UpdateSettingsSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <label htmlFor="name">Name</label>
                <div className="form-group">
                  <div className="form-group__input">
                    <Field
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name..."
                    />
                  </div>
                  {errors.name && touched.name ? (
                    <div className="form-group__error">
                      <p>{errors.name}</p>
                    </div>
                  ) : null}
                </div>

                <label htmlFor="bio">Bio</label>
                <div className="form-group">
                  <div className="form-group__input">
                    <Field
                      name="bio"
                      type="bio"
                      className="form-control"
                      placeholder="Enter your bio..."
                    />
                  </div>
                  {errors.bio && touched.bio ? (
                    <div className="form-group__error">
                      <p>{errors.bio}</p>
                    </div>
                  ) : null}
                </div>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateSettings;
