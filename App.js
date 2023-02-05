// // import AsyncStorage from '@react-native-community/async-storage';
// import React, { useState } from 'react';
// import { Button, Text } from 'react-native';


// const Example = () => {
//   const [username, setUsername] = useState('');

//   const storeData = async () => {
//     try {
//       await AsyncStorage.setItem('TASKS','Aneeq Ahmash Khan',);
//     } catch (error) {
//       console.log("🚀 ~ file: App.js:16 ~ storeData ~ error", error)
//       // Error saving data
//     }
//   };

//   const retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('TASKS');
//       if (value !== null) {
//         setUsername(value)
//       }
//     } catch (error) {
//       console.log("🚀 ~ file: App.js:30 ~ retrieveData ~ error", error)
//       // Error retrieving data
//     }
//   };

//   return (
//     <>
//       <Button title='Store Data' onPress={()=>storeData()}/>
//       <Button title="Retrieve Data"onPress={()=>retrieveData()}/>
//       <Text>{username}</Text>
//     </>
//   );
// };

// export default Example;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})