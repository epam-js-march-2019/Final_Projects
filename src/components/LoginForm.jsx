import React from "react";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Modal,
  Input
} from "semantic-ui-react";

const submitHandler = () => {
  //берем jwt токен из локалстора
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const email = document.querySelector(".submitEmail > input").value;
  const password = document.querySelector(".submitPassword > input").value;
  const loginForm = document.querySelector(".modalLogin");
  //Если значения инпутов равны значению емейла и пароля [0] индекса токена (1й пользователь), то
  if (jwt[0].email === email && jwt[0].password === password) {
    //закрываем модалку
    loginForm.parentElement.classList.remove("active");
    document.body.classList.remove("dimmed", "dimmable");
    //выводим сообщение
    alert("Congratulations! You are logged in!");
  } else {
    alert("Wrong email or password !!!");
  }
};

class LoginForm extends React.Component {
	//При загрузке компонента с помощью аксиос считываем данные пользователей из users.json. Затем создаем токен в локалстор с данными из users.json
  componentWillMount() {
    const TOKEN_KEY = "jwt";
    axios.get("/users.json").then(({ data }) => {
      console.log(data);
      if (localStorage) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <Modal className="modalLogin" trigger={<Button>Login</Button>}>
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

                <Button onClick={submitHandler} color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Modal>
    );
  }
}

export default LoginForm;
