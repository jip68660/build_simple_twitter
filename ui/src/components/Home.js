import React from 'react';
import StatusList from './StatusList';
import StatusInput from './StatusInput';
import { fetchToServer } from '../util'

class Home extends React.Component{
  componentDidMount() {
    const sessionkeyInput = localStorage.getItem("sessionkey");
    if (sessionkeyInput !== undefined) {
      fetchToServer(
        "session", 
        { sessionkey: sessionkeyInput }, 
        (data) => {this.props.handleSet(data.name, data.handle)}
      );
    }
  }
  
  render() {
    console.log('rending Home.js');
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
