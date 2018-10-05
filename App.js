import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import codePush from 'react-native-code-push'

export default class App extends Component {
  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Some text to update</Text>
        <TouchableOpacity style={styles.btn} onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 25
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})
