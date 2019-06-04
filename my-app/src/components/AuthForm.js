import React from "react";
import {Redirect} from "react-router-dom"

function AuthForm(props) {
  const authStyle={paddingLeft:20};
  function handleSubmit(e){
    props.onSubmit(e.target.value);
    e.preventDefault();
  };

  function handleLoginChange(e) {
    props.onLoginChange(e.target.value);
  };
  function handlePasswordChange(e) {
    props.onPasswordChange(e.target.value);
  };

  if (!props.isLoggedIn){
    return (
      <div style={authStyle}>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={props.login}
            onChange={handleLoginChange}
            placeholder="login"/>
          <input 
            type="password" 
            value={props.password}
            onChange={handlePasswordChange}
            placeholder="password"/>
          <button type='submit' value='Submit!'>Submit!</button>
        </form> 
      </div>
    ); 
  } else return <Redirect to="/profile"/>
  
}

export default AuthForm;