import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../Forms.css';

let Form = ({ errorMessage, handleSubmit }) => {
  return(
    <form className="form-login" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <Field type="email" name="email" component="input" className="form__field" required/>
      <label htmlFor="password">Пароль:</label>
      <Field type="password" name="password" component="input" className="form__field" required/>
      <button type="submit" className="button form__button">Войти</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  )
}

Form = reduxForm({
  form: 'login'
})(Form)

export default Form;