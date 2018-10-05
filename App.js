import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class App extends Component {
  render() {
    return <Text style={styles.welcome}>Testing codepush</Text>
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
