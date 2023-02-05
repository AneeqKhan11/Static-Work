import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TopTabNavigator, Header } from '../../component'

const Home = () => {
  return (
    <View style={styles.Home}>
      <Header/>
      <TopTabNavigator />
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  Home:{
    flex:1,
  }
})