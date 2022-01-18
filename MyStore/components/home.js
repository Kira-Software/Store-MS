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
} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={styles.header}>Store Management System</Text>
      <Text style={styles.title}>Add Item</Text>
      <TextInput placeholder="Item Name" style={styles.input} />
      <TextInput placeholder="Amount of Money" style={styles.input} />
      <TextInput placeholder="Date Sold" style={styles.input} />

      <Text style={styles.add}>Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },

  header: {
    marginBottom: 100,
    // width: 350,
    height: 100,
    color: 'black',
    // backgroundColor: 'black',
    fontSize: 25,
    paddingTop: 20,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 25,
    color: 'blue',
    marginBottom: 50,
    fontWeight: 'bold',
  },

  input: {
    fontSize: 17,
    width: 200,
    height: 50,
  },

  add: {
    width: 200,
    height: 40,
    marginTop: 50,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 30,
    paddingLeft: 80,
    fontSize: 20,
    marginLeft: 50,
  },
});

export default Home;
