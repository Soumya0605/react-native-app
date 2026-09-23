import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.push("Profile")} />
    </View>
  ) 
}

export default Home

const styles = StyleSheet.create({})