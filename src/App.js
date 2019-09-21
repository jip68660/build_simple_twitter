import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    var now = new Date();
    var dateFormat = (now.getMonth()+1) + "/" + now.getDate();

    this.setState((prevState)=>{
      const newUserPost = { "name" : prevState.name, "handle": prevState.handle, "text": prevState.text, "likes": prevState.likes, "timestamp": dateFormat };
      return {
        ...prevState,
        name: "",
        handle: "",
        text: "",
        userPosts: prevState.userPosts.concat([newUserPost]),
      }
    });
  }
  handleSignup = (event) => {
    event.preventDefault();
  }
  
  //Working on it.
  handleLikes = (text) => {
    const index = this.state.userPosts.findIndex(userPosts => userPosts.text === text);
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
    console.log("reached");
    this.setState({
      [input]: event.target.value
    });
  }  
 
  render() {
    return(
      <Router>
        <div>
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
                  handleChange={ this.handleChange } 
                  handleSubmit={ this.handleSubmit }  
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
