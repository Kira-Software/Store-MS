import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Login = () => {
  const goToHome = () => {
    Actions.home();
  };
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />

      <TouchableOpacity>
        <Text style={styles.submit} onPress={goToHome}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },

  title: {
    fontSize: 35,
    color: 'blue',
    marginBottom: 50,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 17,
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

export default Login;
