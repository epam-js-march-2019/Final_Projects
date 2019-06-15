import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setLogin, removeLogin } from "../actions/login";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Modal,
  Input
} from "semantic-ui-react";

const TOKEN_KEY = "jwt";
const LOGGED = "Logged";

class LoginForm extends React.Component {
  state = { modalOpen: false };
  //При загрузке компонента с помощью аксиос считываем данные пользователей из users.json. Затем создаем токен в локалстор с данными из users.json
  componentWillMount() {
    const isLogged = JSON.parse(localStorage.getItem("Logged"));
    isLogged === "true" ? this.props.setLogin() : this.props.removeLogin();
    console.log(this.props.login.loggedUser);
    // this.props.login.loggedUser ? this.props.setLogin();
    axios.get("/users.json").then(({ data }) => {
      console.log(data);
      if (localStorage) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
      }
    });
  }

  submitHandler = () => {
    //берем jwt токен из локалстора

    const jwt = JSON.parse(localStorage.getItem("jwt"));
    const email = document.querySelector(".submitEmail > input").value;
    const password = document.querySelector(".submitPassword > input").value;
    //Если значения инпутов равны значению емейла и пароля [0] индекса токена (1й пользователь), то
    if (jwt[0].email === email && jwt[0].password === password) {
      //закрываем модалку и обновляем store (login - true)

      this.props.setLogin();
      if (localStorage) {
        localStorage.setItem(LOGGED, JSON.stringify("true"));
      }
      this.setState({ modalOpen: false });
    } else {
      this.props.removeLogin();
      if (localStorage) {
        localStorage.setItem(LOGGED, JSON.stringify("false"));
      }
      alert("Wrong email or password !!!");
    }
  };

  logoutHandler = () => {
    this.props.removeLogin();
    if (localStorage) {
      localStorage.setItem(LOGGED, JSON.stringify("false"));
		}
		window.location.href = "/";
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    if (!this.props.login.loggedUser) {
      return (
        <Modal
          className="modalLogin"
          open={this.state.modalOpen}
          onClose={this.handleClose}
          trigger={<Button onClick={this.handleOpen}>Login</Button>}
        >
          <Grid
            textAlign="center"
            style={{
              height: "70vh",
              position: "absolute",
              top: "50%",
              left: "50%"
            }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Log-in to your account
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    className="submitEmail"
                  />
                  <Input
                    className="submitPassword"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />

                  <Button
                    onClick={this.submitHandler}
                    color="teal"
                    fluid
                    size="small"
                    width="100px"
                  >
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Modal>
      );
    } else {
      return (
        <div>
          <Button
            size="large"
          >
            {<Link to={"/cabinet"} color='white'>My Cabinet</Link>}
          </Button>
          <Button onClick={this.logoutHandler} color="red" size="large">
            Logout
          </Button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setLogin: () => dispatch(setLogin),
  removeLogin: () => dispatch(removeLogin)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
