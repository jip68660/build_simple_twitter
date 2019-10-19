import React from 'react';
import StatusList from './StatusList';
import StatusInput from './StatusInput';

class Home extends React.Component{
  componentDidMount() {

    const fetchPromise = fetch("http://35.226.157.89/");
    fetchPromise.then(response => {
      response.text().then((text) => {
        this.props.handleMessage(text);
      });
    });
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
