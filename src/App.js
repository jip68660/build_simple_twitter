import React from 'react';
import Status from './components/Status'

class App extends React.Component{
  render() {
    const name="Jihoon Shin";
    
    return(
      <Status name={ name }> </Status>
    );
  }


}

export default App;
