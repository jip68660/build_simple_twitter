import React from 'react';
import StatusList from './StatusList';
import StatusInput from './StatusInput';

class Home extends React.Component{
  componentDidMount() {
    const sessionkeyInput = localStorage.getItem("sessionkey");
    if (sessionkeyInput !== undefined) {
      const sessionkeyInput = localStorage.getItem("sessionkey");
      const fetchPromise = fetch("http://35.226.157.89/session", {
        method: 'POST',
        body: JSON.stringify({ sessionkey: sessionkeyInput }),
        headers: {
          'Content-Type': 'application/json'
        }        
      });
      fetchPromise.then(response => {
        response.json().then((data) => {
          this.props.handleSet(data.name, data.handle)
        });
      });
    }
  }
  
  render() {

    return(
       <div>
         <p>{this.props.msg}</p>
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
