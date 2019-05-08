import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAS-d7d800zOKCpuBVZt_AouPjsnWsTBdk",
      authDomain: "manager-7f1ea.firebaseapp.com",
      databaseURL: "https://manager-7f1ea.firebaseio.com",
      projectId: "manager-7f1ea",
      storageBucket: "manager-7f1ea.appspot.com",
      messagingSenderId: "950624533137",
      appId: "1:950624533137:web:daee17bb0783acf1"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers,  {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        {/* <Header headerText="Manager" /> */}
        <Router />
      </Provider>
    );
  };
}

export default App;
