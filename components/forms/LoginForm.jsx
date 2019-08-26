import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

const FormElement = styled.div`
  margin-bottom: 10px;

  input, button {
    width: 50%;
    font-size: 14px;
  }
`;

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormElement>
            <input
              placeholder="아이디"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </FormElement>
          <FormElement>
            <input
              placeholder="패스워드"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </FormElement>
          <FormElement>
            <button type="submit" disabled={isSubmitting}>
              로그인
            </button>
          </FormElement>
        </form>
      )}
    </Formik>
  );
}
