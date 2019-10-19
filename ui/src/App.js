import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import ButtonFormat from './components/ButtonFormat';
import AuthButton from './components/AuthButton';

class App extends React.Component{
  constructor(props) {
    // Done this automatically if "constructor" is not used.
    super(props);
    this.state = {
      name: "",
      handle: "",
      text: "",
      likes: 0,
      password: "",
      userPosts: [],
      users: [],
      currUser: null,
      msg: ""
    };
    this.check = false;
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

    if (this.state.currUser === null) {
      alert("Please Log-in");
    }
    else {
      this.setState((prevState)=>{
        const newUserPost = { "name" : prevState.currUser.name, "handle": prevState.currUser.handle, "text": prevState.text, "likes": prevState.likes, "timestamp": dateFormat };
        return {
          ...prevState,
          text: "",
          userPosts: prevState.userPosts.concat([newUserPost])
        }
      });
    }
  }
  handleSignup = (event) => {
    console.log("handlneSignup");
    console.log(event);
    const fetchPromise = fetch("http://35.226.157.89/signup", {
      method: 'POST',
      body: JSON.stringify({ username: this.props.handle, password: this.props.password, name: this.props.name }),
      headers: {
        'Content-Type': 'application/json'
      }        
    });
    fetchPromise.then(response => {
      response.json().then((data) => {
        console.log(data);
        console.log(`saving to localstorage: ${data.sessionkey}`);
        localStorage.setItem('sessionkey', data.sessionkey);
        console.log("success");
      });
    });

  }
  handleLogin = (event) => {
    const fetchPromise = fetch("http://35.226.157.89/login", {
      method: 'POST',
      body: JSON.stringify({ username: this.props.handle, password: this.props.password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchPromise.then(response => {
      const json = response.json();
      localStorage.setItem('sessionkey', json.sessionkey);
    });
  }
  handleLogout = (event) => {
    console.log("clicked");
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        currUser: null
      }
    });
  }
  
  //Working on it.
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
 
  // const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);
// });

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Close the database connection.");
// });
  render() {
    return(
      <Router>
        <div>
          <AuthButton check = { this.check }/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/signup">Sign-up</Link>
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
                  msg = { this.state.msg }
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
                  fakeAuth={ this.fakeAuth }
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
                  fakeAuth={ this.fakeAuth }
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
