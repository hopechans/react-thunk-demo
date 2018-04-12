import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as allAction from './action/count';
import store from './store/index'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // 发出 Action
    this.props.getListAction()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>title:-----{this.props.indexList.title}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    'indexList':state.indexReducer
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(allAction,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
