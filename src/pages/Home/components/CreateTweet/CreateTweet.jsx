import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";

import { createPost } from "../../../../apis";
import { handleToast } from "../../../../utils";
import { TOAST_STATUS } from "../../../../constants";
import useAuthToken from "../../../../hooks/useAuthToken";

import "./create-tweet.css";

const CreateTweetSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const CreateTweet = () => {
  useAuthToken();
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: (post) => {
      return createPost(post);
    },
  });

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
          <div className="right">
            <div className="create-tweet__form">
              <Formik
                initialValues={{
                  content: "",
                }}
                validationSchema={CreateTweetSchema}
                onSubmit={(values, { resetForm }) => {
                  createPostMutation.mutate(values, {
                    onSuccess: () => {
                      queryClient.invalidateQueries("fetchPosts");
                      resetForm();
                    },
                    onError: () => {
                      handleToast(
                        TOAST_STATUS.ERROR,
                        "Failed when creating new post"
                      );
                    },
                  });
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
                    {errors.content && touched.content ? (
                      <div className="form-group__error">
                        <p>{errors.content}</p>
                      </div>
                    ) : null}

                    <div className="create-tweet-form__footer box-item__footer">
                      <div className="left"></div>
                      <div className="right">
                        <button type="submit" className="btn btn-primary">
                          Tweet
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
