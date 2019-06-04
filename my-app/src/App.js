import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Post from "./components/Post";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";

function randomId(p=8) {
  return (Math.random()*Math.pow(10,p)).toFixed();
}

const appData = [
  {
    title:"blog post 1",
    date:Date.now(),
    id: randomId(),
    score: 10,
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe tempora at accusamus, repudiandae aspernatur consectetur nobis perferendis corrupti aliquid."
  },
  {
    title:"blog post 2",
    date:Date.now(),
    id: randomId(),
    score: 0,
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe tempora at accusamus, repudiandae aspernatur consectetur nobis perferendis corrupti aliquid."
  },
  {
    title:"blog post 3",
    date:Date.now(),
    id: randomId(),
    score:3,
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum saepe tempora at accusamus, repudiandae aspernatur consectetur nobis perferendis corrupti aliquid."
  },
  {
    /* post to be added */
    id: randomId(),
    score: -1,
    content: "soon…"
  }
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      login: "",
      password: "",
      userId: "",
      data: appData,
      userScores: {}
    };
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.changeScore =this.changeScore.bind(this);
  }

  changeScore(value, postId){
    if (this.state.isLoggedIn){

      value = parseInt(value, 10);
      let userScore = this.state.userScores[postId];
      
      /* с этим куском пришлось помучиться */
      if (userScore===undefined) {
        userScore = value;
      } else if (userScore - value === 0) {
        value = 0;
      } else if (Math.abs(userScore - value) > 0 ) {
        userScore += value;
      }

      const postIndex = this.state.data.findIndex( ( {id} )=> (id === postId) );
      this.setState(( {data, userScores} ) => {
        const oldPost = data[postIndex];
        const newPost = {...oldPost, score: oldPost.score  + value};
        const changedData = [...data.slice(0, postIndex), newPost, ...data.slice(postIndex+1)];
        console.log(newPost, changedData, userScores, newPost.score);
        return {
          data: changedData,
          userScores:{...userScores, [postId]: userScore}
        };
      })
    }
  }

  onSubmit(){
    const userId = randomId(10);
    const stupidHash = 
      `${this.state.login}${this.state.password}`
        .split('')
        .map(s=>s.charCodeAt())
        .reduce((a,b)=>a+b) ^ userId;
    window.localStorage.setItem(userId, stupidHash);
    this.setState({isLoggedIn: true, password:"", userId});
  }

  onLoginChange(login){
    this.setState({login});
  }
  onPasswordChange(password){
    this.setState({password});
  }
  onSignOut(){
    this.setState({isLoggedIn: false, login: '',password: '',userId: ''});
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Header login={this.state.login} isLoggedIn={this.state.isLoggedIn}/>
          <Route exact path="/" render={ () => (
            <Feed data={this.state.data} 
              changeScore={this.changeScore}
              isLoggedIn={this.state.isLoggedIn}/>)
          } />
          <Route path="/authorize" 
            render={()=>(
              <AuthForm 
                onLoginChange={this.onLoginChange}
                onPasswordChange={this.onPasswordChange}
                onSubmit={this.onSubmit}
                onSignOut={this.onSignOut}
                isLoggedIn={this.state.isLoggedIn}
                password={this.state.password}
                login={this.state.login}/>
            )}/>

          <Route path='/profile'
            render={()=>(
              <Profile 
                login={this.state.login}
                onSignOut={this.onSignOut}/>
            )} />

          <Route path="/:id(\d+)([\w\d-]+)"
            render={ ( {match} ) => {
              const postContent = this.state.data.filter( ({id}) => id === match.params.id)[0];
              return <Post data={postContent}/>
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
