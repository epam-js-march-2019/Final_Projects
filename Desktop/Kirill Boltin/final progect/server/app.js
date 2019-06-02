const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');


class App {

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.routes();
  }

  routes() {
    this.signIn();
    this.signUp();
  }

  signIn() {
    this.app.post('/sign-in', (req, res) => {
      const { email, password } = req.body;
      if (this.isUserSignedUp(email, password)) {
        res.json({ successful: true });
        return;
      }
      res.json({ successful: false, error: { text: 'User doesn\'t exist' } });
    });
  }

  signUp() {
    this.app.post('/sign-up', (req, res) => {
      const users = this.getUsersList();
      users.push(req.body);
      fs.writeFileSync('data/users.json', JSON.stringify(users));
      res.json({ created: true });
    });
  }

  isUserSignedUp(email, password) {
    return this.getUsersList().some(user => user.email === email && user.password === password);
  }

  getUsersList() {
    return JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
  }
}

module.exports = new App().app;