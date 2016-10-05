import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <p>Basic React boilerplate with Webpack and Webpack Dev Server</p>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
