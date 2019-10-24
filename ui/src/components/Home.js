import React from 'react';
import StatusList from './status/StatusList';
import StatusInput from './status/StatusInput';
import { fetchToServer } from '../util'

class Home extends React.Component{
  componentDidMount() {
    const sessionkeyInput = localStorage.getItem("sessionkey");
    console.log(sessionkeyInput);
    if (sessionkeyInput !== undefined && sessionkeyInput !== null) {
      console.log("reached");
      fetchToServer(
        "session", 
        { sessionkey: sessionkeyInput }, 
        (data) => {this.props.handleSet(data.name, data.handle)}
      );
    }
  }  
  render() {
    return(
       <div>
          <StatusInput
            textInput={ this.props.text }
            handleChange={ this.props.handleChange }
            handleSubmit={ this.props.handleSubmit }
          />
          <StatusList 
            userPosts={ this.props.userPosts } 
            handleLikes={ this.props.handleLikes }
          />
        </div> 
    );
  }
}

export default Home;
