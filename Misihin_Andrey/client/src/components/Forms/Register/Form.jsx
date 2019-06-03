import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../Forms.css';

let Form = ({ handleSubmit, errorMessage }) => {
  return(
  <form className="form-register" onSubmit={handleSubmit}>
    <label htmlFor="email">Email:</label>
    <Field type="email" name="email" component="input" className="form__field" required/>
    <label htmlFor="password">Пароль:</label>
    <Field type="password" name="password" component="input" className="form__field" required/>
    <label htmlFor="username">Имя:</label>
    <Field type="input" name="username" component="input" className="form__field"/>
    <button type="submit" className="button form__button">Зарегистрироваться</button>
    {errorMessage && <p className="error">{errorMessage}</p>}
  </form>
  )
}

Form = reduxForm({
  form: 'register'
})(Form)

export default Form;