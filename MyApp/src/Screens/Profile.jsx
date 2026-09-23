import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', fontStyle: 'italic' }}>Profile</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate("Search")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})