import React from 'react';
import StatusList from './components/StatusList'

class App extends React.Component{
  render() {
    // XXX: Get all names and texts here.
    // const name = "Jihoon Shin";
    // const text = "Hello, world!";

    const userPosts = [
      { "name" : "jihoon", "text": "Hello"},
      { "name" : "jeong", "text": "Hello bye"},
      { "name" : "june", "text": "Hello yooooo"}
    ];
    
    return(
      <div>
        <StatusList userPosts = { userPosts } />
      </div>

    );
  }


}

export default App;
