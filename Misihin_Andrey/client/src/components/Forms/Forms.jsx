import React, { Fragment } from 'react';
import './Forms.css';
import { RegisterForm, LoginForm } from '../';

function Forms() {
  return (
    <Fragment>
      <LoginForm />
      <RegisterForm />
    </Fragment>
  )
}

export default Forms;