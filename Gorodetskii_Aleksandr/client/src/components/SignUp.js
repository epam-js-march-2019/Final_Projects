import React from "react";
import { Container, Box, Button, Text, Heading, TextField } from "gestalt";
import Warning from "./Warning";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    warning: false,
    warningMessage: ""
  };

  changeHandler = ({ event, value }) => {
    //native evt or sythetic evt???
    event.persist();
    this.setState({
      [event.target.name]: value
    });
  };

  submitHandler = event => {
    const { username, password, email } = this.state;
    event.preventDefault();

    if (username && password && email) {
      // console.log('submitted')
    } else {
      this.showWarningMessage("You have to fill all fields");
      // console.log('form is empty');
    }
  };

  showWarningMessage = message => {
    this.setState({ warning: true, warningMessage: message });
    setTimeout(
      () => this.setState({ warning: false, warningMessage: "" }),
      2000
    );
  };

  render() {
    const { warningMessage, warning } = this.state;
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2db"
            }
          }}
          margin={4}
          padding={5}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* SignUp Form */}
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
              <Heading color="midnight">Sign Up</Heading>
              <Text italic color="orchid">
                Sign up to order items
              </Text>
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
              id="email"
              type="email"
              name="email"
              placeholder="email"
              onChange={this.changeHandler}
            />

            {/* Email */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.changeHandler}
            />

            <Button color="blue" text="submit" type="submit" inline />
          </form>
        </Box>
        <Warning show={warning} message={warningMessage} />
      </Container>
    );
  }
}

export default SignUp;
