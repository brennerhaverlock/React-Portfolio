import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Brenner Haverlock"
  }

  render(){
    return(
      <b> test </b>
    )
  }
}

ReactDOM.render(
  <Doc />,
  document.getElementById('container')
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
