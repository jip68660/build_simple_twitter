import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import ButtonFormat from './components/format/ButtonFormat';
import AuthButton from './components/AuthButton';
import { fetchToServer } from './util';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      handle: "",
      text: "",
      likes: 0,
      password: "",
      userPosts: []
    };
    this.isLogIn = true;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSet = this.handleSet.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    
    var now = new Date();
    var dateFormat = (now.getMonth()+1) + "/" + now.getDate();

    if (this.state.handle === null || this.state.handle === undefined) {
      alert("Please Log-in");
    }
    else {
      this.setState((prevState)=>{
        const newUserPost = {
          "name" : prevState.name, 
          "handle": prevState.handle, 
          "text": prevState.text, 
          "likes": prevState.likes, 
          "timestamp": dateFormat 
        };
        return {
          ...prevState,
          text: "",
          userPosts: [newUserPost].concat(prevState.userPosts)
        }
      });
    }
  }
  handleSignup = (event) => {
    fetchToServer(
      "signup", 
      { username: this.state.handle, password: this.state.password, name: this.state.name },
      (data) => localStorage.setItem('sessionkey', data.sessionkey)
    );
  }
  handleLogin = (event) => {
    fetchToServer(
      "login", 
      { username: this.state.handle, password: this.state.password },
      (data) => localStorage.setItem('sessionkey', data.sessionkey)
    );
  }
  handleLogout = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        name: null,
        handle: null
      }
    });
  }  
  handleLikes = (text) => {
    const index = this.state.userPosts.findIndex(userPost => userPost.text === text);
    const selected = this.state.userPosts[index];
    const nextUserPosts = [ ...this.state.userPosts ];
    nextUserPosts[index] = {
      ...selected, likes: selected.likes + 1
    };
    this.setState({
      userPosts: nextUserPosts
    });
  }
  handleChange = (input, event) => {
    this.setState({
      [input]: event.target.value
    });
  }  
  handleSet = (name, handle) => {
    this.setState({
      name: name,
      handle: handle
    });
  }
  render() {
    return(
      <Router>
        <div>
          <AuthButton check = { this.isLogIn }/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Log-in</Link>
              </li>
            </ul>
          </nav>
          <Route 
            path="/"
            exact 
            render={() => {
              return ( 
                <Home 
                  text={ this.state.text }
                  handleChange={ this.handleChange } 
                  handleSubmit={ this.handleSubmit } 
                  userPosts={ this.state.userPosts } 
                  handleLikes={ this.handleLikes }
                  handleLogout={ this.handleLogout } 
                  handleSet = { this.handleSet }
                /> 
              );
             }
            } 
          />
          <Route path="/about" component={ About } />
          <Route 
            path="/signup" 
            render={() => {
              return(
                <Signup 
                  name={ this.state.name } 
                  handle={ this.state.handle }
                  password={ this.state.password }
                  handleChange={ this.handleChange } 
                  handleSignup={ this.handleSignup }  
                />
              );
             }
            }
          />
          <Route 
            path="/login" 
            render={() => {
              return(
                <Login 
                  handle={ this.state.handle }
                  password={ this.state.password }
                  handleChange={ this.handleChange } 
                  handleLogin={ this.handleLogin }  
                />
              );
             }
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
