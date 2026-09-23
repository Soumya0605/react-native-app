import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', fontStyle: 'italic' }}>Search</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})