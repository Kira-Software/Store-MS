import React from 'react';
// import type {Node} from 'react';
import Login from './components/login';
import Home from './components/home';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="login" component={Login} title="Login" initial={true} />
      </Scene>
    </Router>
    // <View style={styles.container}>
    //   <Login />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    color: 'blue',
    marginBottom: 50,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 20,
    width: 200,
    height: 50,
  },

  submit: {
    width: 200,
    height: 40,
    marginTop: 50,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 30,
    paddingLeft: 80,
    fontSize: 20,
  },
});

export default App;
