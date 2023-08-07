import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";

import "./search-bar.css";

const SearchBar = () => {
  return (
    <div className="box-item search-bar" id="search-bar">
      <div className="search-bar__icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="search-bar__form">
        <Formik
          initialValues={{
            searchContent: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="form">
              <div className="search-bar__input">
                <Field
                  name="searchContent"
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <div className="search-bar__button">
                <button type="submit" className="btn btn-primary btn-block">
                  Search
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchBar;
