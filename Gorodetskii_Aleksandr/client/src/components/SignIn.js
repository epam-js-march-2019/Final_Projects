import React from "react";
import { Container, Box, Button, Heading, TextField } from "gestalt";
import Warning from "./Warning";
import Strapi from "strapi-sdk-javascript/build/main";
import { setToken } from "../utility";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const StrapiRq = new Strapi(apiUrl);

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    warning: false,
    warningMessage: "",
    disableSubmit: false
  };

  changeHandler = ({ event, value }) => {
    //native evt or sythetic evt???
    event.persist();
    this.setState({
      [event.target.name]: value
    });
  };

  submitHandler = async event => {
    const { username, password } = this.state;
    event.preventDefault();

    if (username && password) {
      console.log('submitted')
      try {
        //loader(true)>request>loader(false)>token to local storage>redirect to homepage
        this.setState({ disableSubmit: true });
        const response = await StrapiRq.login(password, username);
				this.setState({ disableSubmit: false });
				setToken(response.jwt)
        this.redirectUser("/");
        console.log(response);
      } catch (err) {
        this.showWarningMessage(err.message);
        this.setState({ disableSubmit: false });
      }
    } else {
      this.showWarningMessage("You have to fill all fields");
      // console.log('form is empty');
    }
  };

  redirectUser = path => this.props.history.push(path);

  showWarningMessage = message => {
    this.setState({ warning: true, warningMessage: message });
    setTimeout(
      () => this.setState({ warning: false, warningMessage: "" }),
      2000
    );
  };

  render() {
    const { warningMessage, warning, disableSubmit } = this.state;
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "lightgray"
            }
          }}
          margin={4}
          padding={5}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* SignIn Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.submitHandler}
          >
            {/* Form Header */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Sign In</Heading>
            </Box>

            {/* Username */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="username"
              onChange={this.changeHandler}
            />

            {/* Password */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.changeHandler}
            />

            <Button
              disabled={disableSubmit}
              color="blue"
              text="submit"
              type="submit"
              inline
            />
          </form>
        </Box>
        <Warning show={warning} message={warningMessage} />
      </Container>
    );
  }
}

export default SignIn;
