import React from 'react';
import StatusList from './components/StatusList';
import StatusInput from './components/StatusInput';
// import { Router } from 'react-router-dom';

class App extends React.Component{

  constructor(props) {
    // Done this automatically if "constructor" is not used.
    super(props);
    this.state = {
      name: "",
      handle: "",
      text: "",
      userPosts: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (input, event) => {
    this.setState({
      [input]: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    var now = new Date();
    var dateFormat = (now.getMonth()+1) + "/" + now.getDate();

    this.setState((prevState)=>{
      const newUserPost = { "name" : prevState.name, "handle": prevState.handle, "text": prevState.text, "timestamp": dateFormat };
      return {
        ...prevState,
        name: "",
        handle: "",
        text: "",
        userPosts: prevState.userPosts.concat([newUserPost]),
      }
    });
    console.log(this.state);
  }
  render() {
    // XXX: Get all names and texts here.
    // const name = "Jihoon Shin";
    // const text = "Hello, world!";

    // const userPosts = [
    //   { "name" : "jihoon", "handle":"j123", "text": "Hello", "timestamp": dateFormat},
    //   { "name" : "jeong", "handle":"jg123", "text": "Hello bye", "timestamp": dateFormat},
    //   { "name" : "june", "handle": "kim1111", "text": "Hello yooooo", "timestamp": dateFormat }
    // ];

    return(
      <div>
        <StatusInput nameInput={ this.state.name } handleInput={ this.state.handle } textInput={ this.state.text } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
        <StatusList userPosts={ this.state.userPosts } />
      </div>

    );
  }


}

export default App;
