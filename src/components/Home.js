import React from 'react';
import StatusList from './StatusList';
import StatusInput from './StatusInput';

class Home extends React.Component{
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
