import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  };
}

export default App;
