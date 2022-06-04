import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import { firebaseConfig } from './env';

export default function LogInScreen(props) {
  const { navigation } = props;

  const [count, setCount] = useState(0);

  function Substruct() {
    setCount((prevCount) => prevCount - 10);
  }

  function Reset() {
    Alert.alert(
      "Reset your count",
      "ARE YOU SURE??",
      [
        // {
        //   text: "Ask me later",
        //   onPress: () => console.log("Ask me later pressed")
        // },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Reset", onPress: () => { setCount(0) } }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setCount((prevCount) => prevCount + 10) }} >
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity onPress={() => Substruct()} >
        <Text style={styles.button}>Substruct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Reset()}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
      <Text style={(count >= 0 && count <= 70) ? (styles.text) : (styles.textRed)}>{(count >= 0 && count <= 70) ? ('0です') : ('0じゃないです')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: '#000',
    fontSize: 30,
  },
  text: {
    color: '#000',
  },
  textRed: {
    color: 'red',
  },
  button: {
    backgroundColor: '#000',
    color: '#eee',
    padding: 10,
    margin: 8,
  },
  reset: {
    backgroundColor: 'red',
    color: '#eee',
    padding: 10,
    margin: 8,
  }
});
