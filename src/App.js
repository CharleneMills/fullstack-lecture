import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {connect} from 'react-redux';


function App(props) {
  console.log("look at me ", props)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
