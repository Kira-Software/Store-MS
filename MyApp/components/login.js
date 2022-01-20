import React, {useState} from 'react';
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

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleemail = value => {
    setemail(value);
    console.log(email, password);
  };
  const handlepassword = value => {
    setpassword(value);
    console.log(email, password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={handleemail}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        onChangeText={handlepassword}
      />

      <TouchableOpacity>
        <Text
          style={styles.submit}
          onPress={() => navigation.navigate('Home', {name: 'Store_Keeper'})}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
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
