// import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View } from 'react-native'
// import React from 'react'

// const App = () => {

//   const theme = useColorScheme();
//   console.log('theme', theme)

//   const isDarkMode = theme === 'dark';

//   const backgroundXColur = isDarkMode ? 'black' : 'white';
//   const textXColour = isDarkMode ? 'white' : 'black';
//   const buttonXColour = isDarkMode ? 'lightblue' : 'blue';

//   return (
//     <SafeAreaView style={[styles.container, { backgroundColor: backgroundXColur }]}>
//       <Text style={[styles.text, { color: textXColour }]}>hello world</Text>
//       <Image
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//         style={{ width: 200, height: 300 }}
//       />

//       <Pressable style={[styles.button, { backgroundColor: buttonXColour }]} onPress={() => Alert.alert('Button Pressed')}>
//         <Text style={[styles.buttonText, { color: isDarkMode ? 'black' : 'white' }]}>Press Me</Text>
//       </Pressable>

//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightyellow',
//     gap: 20
//   },

//   text: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     padding: 10
//   },

//   button: {
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20
//   },

//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// })

// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <ScrollView

//     contentContainerStyle={{ gap: 10}}

//     style={styles.container}>
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//     </ScrollView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     backgroundColor: 'lightblue',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     padding: 20,
//   },
//   box1: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     // alignSelf: 'flex-start',
//     backgroundColor: 'orange',
//     borderRadius: 20

//   },
//   box2: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 50
//   },
//   box3: {
//     // flex: 1,
//     width: 100,
//     height: 100,
//     // alignSelf: 'flex-end',
//     backgroundColor: 'green',
//     borderRadius: 20
//   }
// })

// import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
// import React from 'react'

// const dummyData = [
//   { id: 1, name: 'John', age: 30, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
//   { id: 2, name: 'Jane', age: 25, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
//   { id: 3, name: 'Michael', age: 35, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
//   { id: 4, name: 'Emily', age: 28, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
//   { id: 5, name: 'David', age: 32, image: 'https://randomuser.me/api/portraits/men/3.jpg' },
//   { id: 6, name: 'Sarah', age: 27, image: 'https://randomuser.me/api/portraits/women/3.jpg' },
//   { id: 7, name: 'Robert', age: 41, image: 'https://randomuser.me/api/portraits/men/4.jpg' },
//   { id: 8, name: 'Jessica', age: 24, image: 'https://randomuser.me/api/portraits/women/4.jpg' },
//   { id: 9, name: 'William', age: 38, image: 'https://randomuser.me/api/portraits/men/5.jpg' },
//   { id: 10, name: 'Ashley', age: 29, image: 'https://randomuser.me/api/portraits/women/5.jpg' },

//   { id: 11, name: 'James', age: 34, image: 'https://randomuser.me/api/portraits/men/6.jpg' },
//   { id: 12, name: 'Amanda', age: 26, image: 'https://randomuser.me/api/portraits/women/6.jpg' },
//   { id: 13, name: 'Daniel', age: 31, image: 'https://randomuser.me/api/portraits/men/7.jpg' },
//   { id: 14, name: 'Jessica', age: 30, image: 'https://randomuser.me/api/portraits/women/7.jpg' },
//   { id: 15, name: 'Matthew', age: 36, image: 'https://randomuser.me/api/portraits/men/8.jpg' },
//   { id: 16, name: 'Elizabeth', age: 33, image: 'https://randomuser.me/api/portraits/women/8.jpg' },
//   { id: 17, name: 'Christopher', age: 29, image: 'https://randomuser.me/api/portraits/men/9.jpg' },
//   { id: 18, name: 'Megan', age: 27, image: 'https://randomuser.me/api/portraits/women/9.jpg' },
//   { id: 19, name: 'Andrew', age: 40, image: 'https://randomuser.me/api/portraits/men/10.jpg' },
//   { id: 20, name: 'Rachel', age: 25, image: 'https://randomuser.me/api/portraits/women/10.jpg' },

//   { id: 21, name: 'Joshua', age: 37, image: 'https://randomuser.me/api/portraits/men/11.jpg' },
//   { id: 22, name: 'Laura', age: 31, image: 'https://randomuser.me/api/portraits/women/11.jpg' },
//   { id: 23, name: 'Ryan', age: 28, image: 'https://randomuser.me/api/portraits/men/12.jpg' },
//   { id: 24, name: 'Olivia', age: 23, image: 'https://randomuser.me/api/portraits/women/12.jpg' },
//   { id: 25, name: 'Nicholas', age: 42, image: 'https://randomuser.me/api/portraits/men/13.jpg' },
//   { id: 26, name: 'Sophia', age: 26, image: 'https://randomuser.me/api/portraits/women/13.jpg' },
//   { id: 27, name: 'Brandon', age: 33, image: 'https://randomuser.me/api/portraits/men/14.jpg' },
//   { id: 28, name: 'Emma', age: 29, image: 'https://randomuser.me/api/portraits/women/14.jpg' },
//   { id: 29, name: 'Jonathan', age: 35, image: 'https://randomuser.me/api/portraits/men/15.jpg' },
//   { id: 30, name: 'Isabella', age: 22, image: 'https://randomuser.me/api/portraits/women/15.jpg' },

//   { id: 31, name: 'Kevin', age: 39, image: 'https://randomuser.me/api/portraits/men/16.jpg' },
//   { id: 32, name: 'Mia', age: 24, image: 'https://randomuser.me/api/portraits/women/16.jpg' },
//   { id: 33, name: 'Brian', age: 31, image: 'https://randomuser.me/api/portraits/men/17.jpg' },
//   { id: 34, name: 'Charlotte', age: 28, image: 'https://randomuser.me/api/portraits/women/17.jpg' },
//   { id: 35, name: 'Jason', age: 34, image: 'https://randomuser.me/api/portraits/men/18.jpg' },
//   { id: 36, name: 'Amelia', age: 30, image: 'https://randomuser.me/api/portraits/women/18.jpg' },
//   { id: 37, name: 'Justin', age: 27, image: 'https://randomuser.me/api/portraits/men/19.jpg' },
//   { id: 38, name: 'Harper', age: 25, image: 'https://randomuser.me/api/portraits/women/19.jpg' },
//   { id: 39, name: 'Eric', age: 43, image: 'https://randomuser.me/api/portraits/men/20.jpg' },
//   { id: 40, name: 'Evelyn', age: 32, image: 'https://randomuser.me/api/portraits/women/20.jpg' },

//   { id: 41, name: 'Steven', age: 36, image: 'https://randomuser.me/api/portraits/men/21.jpg' },
//   { id: 42, name: 'Abigail', age: 27, image: 'https://randomuser.me/api/portraits/women/21.jpg' },
//   { id: 43, name: 'Thomas', age: 40, image: 'https://randomuser.me/api/portraits/men/22.jpg' },
//   { id: 44, name: 'Ella', age: 23, image: 'https://randomuser.me/api/portraits/women/22.jpg' },
//   { id: 45, name: 'Charles', age: 45, image: 'https://randomuser.me/api/portraits/men/23.jpg' },
//   { id: 46, name: 'Scarlett', age: 29, image: 'https://randomuser.me/api/portraits/women/23.jpg' },
//   { id: 47, name: 'Joseph', age: 33, image: 'https://randomuser.me/api/portraits/men/24.jpg' },
//   { id: 48, name: 'Grace', age: 26, image: 'https://randomuser.me/api/portraits/women/24.jpg' },
//   { id: 49, name: 'Adam', age: 30, image: 'https://randomuser.me/api/portraits/men/25.jpg' },
//   { id: 50, name: 'Chloe', age: 31, image: 'https://randomuser.me/api/portraits/women/25.jpg' },

//   { id: 51, name: 'Peter', age: 38, image: 'https://randomuser.me/api/portraits/men/26.jpg' },
//   { id: 52, name: 'Lily', age: 24, image: 'https://randomuser.me/api/portraits/women/26.jpg' },
//   { id: 53, name: 'Nathan', age: 29, image: 'https://randomuser.me/api/portraits/men/27.jpg' },
//   { id: 54, name: 'Hannah', age: 35, image: 'https://randomuser.me/api/portraits/women/27.jpg' },
//   { id: 55, name: 'Zachary', age: 32, image: 'https://randomuser.me/api/portraits/men/28.jpg' },
//   { id: 56, name: 'Victoria', age: 28, image: 'https://randomuser.me/api/portraits/women/28.jpg' },
//   { id: 57, name: 'Kyle', age: 26, image: 'https://randomuser.me/api/portraits/men/29.jpg' },
//   { id: 58, name: 'Avery', age: 22, image: 'https://randomuser.me/api/portraits/women/29.jpg' },
//   { id: 59, name: 'Benjamin', age: 41, image: 'https://randomuser.me/api/portraits/men/30.jpg' },
//   { id: 60, name: 'Samantha', age: 30, image: 'https://randomuser.me/api/portraits/women/30.jpg' },

//   { id: 61, name: 'Samuel', age: 37, image: 'https://randomuser.me/api/portraits/men/31.jpg' },
//   { id: 62, name: 'Natalie', age: 27, image: 'https://randomuser.me/api/portraits/women/31.jpg' },
//   { id: 63, name: 'Patrick', age: 34, image: 'https://randomuser.me/api/portraits/men/32.jpg' },
//   { id: 64, name: 'Zoe', age: 25, image: 'https://randomuser.me/api/portraits/women/32.jpg' },
//   { id: 65, name: 'Alexander', age: 39, image: 'https://randomuser.me/api/portraits/men/33.jpg' },
//   { id: 66, name: 'Leah', age: 29, image: 'https://randomuser.me/api/portraits/women/33.jpg' },
//   { id: 67, name: 'Dylan', age: 31, image: 'https://randomuser.me/api/portraits/men/34.jpg' },
//   { id: 68, name: 'Nora', age: 23, image: 'https://randomuser.me/api/portraits/women/34.jpg' },
//   { id: 69, name: 'Ethan', age: 28, image: 'https://randomuser.me/api/portraits/men/35.jpg' },
//   { id: 70, name: 'Lucy', age: 33, image: 'https://randomuser.me/api/portraits/women/35.jpg' },

//   { id: 71, name: 'Aaron', age: 36, image: 'https://randomuser.me/api/portraits/men/36.jpg' },
//   { id: 72, name: 'Anna', age: 26, image: 'https://randomuser.me/api/portraits/women/36.jpg' },
//   { id: 73, name: 'Connor', age: 30, image: 'https://randomuser.me/api/portraits/men/37.jpg' },
//   { id: 74, name: 'Ellie', age: 24, image: 'https://randomuser.me/api/portraits/women/37.jpg' },
//   { id: 75, name: 'Caleb', age: 35, image: 'https://randomuser.me/api/portraits/men/38.jpg' },
//   { id: 76, name: 'Lillian', age: 28, image: 'https://randomuser.me/api/portraits/women/38.jpg' },
//   { id: 77, name: 'Isaac', age: 27, image: 'https://randomuser.me/api/portraits/men/39.jpg' },
//   { id: 78, name: 'Sofia', age: 31, image: 'https://randomuser.me/api/portraits/women/39.jpg' },
//   { id: 79, name: 'Luke', age: 40, image: 'https://randomuser.me/api/portraits/men/40.jpg' },
//   { id: 80, name: 'Aria', age: 25, image: 'https://randomuser.me/api/portraits/women/40.jpg' },

//   { id: 81, name: 'Gabriel', age: 33, image: 'https://randomuser.me/api/portraits/men/41.jpg' },
//   { id: 82, name: 'Layla', age: 29, image: 'https://randomuser.me/api/portraits/women/41.jpg' },
//   { id: 83, name: 'Julian', age: 26, image: 'https://randomuser.me/api/portraits/men/42.jpg' },
//   { id: 84, name: 'Riley', age: 32, image: 'https://randomuser.me/api/portraits/women/42.jpg' },
//   { id: 85, name: 'Cameron', age: 37, image: 'https://randomuser.me/api/portraits/men/43.jpg' },
//   { id: 86, name: 'Zoey', age: 23, image: 'https://randomuser.me/api/portraits/women/43.jpg' },
//   { id: 87, name: 'Logan', age: 30, image: 'https://randomuser.me/api/portraits/men/44.jpg' },
//   { id: 88, name: 'Penelope', age: 27, image: 'https://randomuser.me/api/portraits/women/44.jpg' },
//   { id: 89, name: 'Henry', age: 42, image: 'https://randomuser.me/api/portraits/men/45.jpg' },
//   { id: 90, name: 'Claire', age: 34, image: 'https://randomuser.me/api/portraits/women/45.jpg' },

//   { id: 91, name: 'Owen', age: 29, image: 'https://randomuser.me/api/portraits/men/46.jpg' },
//   { id: 92, name: 'Audrey', age: 26, image: 'https://randomuser.me/api/portraits/women/46.jpg' },
//   { id: 93, name: 'Jack', age: 35, image: 'https://randomuser.me/api/portraits/men/47.jpg' },
//   { id: 94, name: 'Bella', age: 30, image: 'https://randomuser.me/api/portraits/women/47.jpg' },
//   { id: 95, name: 'Wyatt', age: 38, image: 'https://randomuser.me/api/portraits/men/48.jpg' },
//   { id: 96, name: 'Stella', age: 24, image: 'https://randomuser.me/api/portraits/women/48.jpg' },
//   { id: 97, name: 'Leo', age: 28, image: 'https://randomuser.me/api/portraits/men/49.jpg' },
//   { id: 98, name: 'Violet', age: 31, image: 'https://randomuser.me/api/portraits/women/49.jpg' },
//   { id: 99, name: 'Mason', age: 36, image: 'https://randomuser.me/api/portraits/men/50.jpg' },
//   { id: 100, name: 'Madison', age: 27, image: 'https://randomuser.me/api/portraits/women/50.jpg' },
// ]

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={dummyData}
//         renderItem={({ item }) => (
//           <View style={styles.card} >
//             <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: item.image }} />
//             <Text>{item.name}</Text>
//             <Text>{item.age}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={<View style={{height: 10}}/>}
//         numColumns={3}
//         columnWrapperStyle={{ gap : 30 }}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'lightblue',
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//   },
//   card: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })

// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [text, setText] = useState('');

//   const [submittedText, setSubmittedText] = useState('');

//   const handleSubmit = () => {
//     setSubmittedText(text);
//     setText('');
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>What is Your Name ?</Text>
//       <TextInput
//         keyboardType='name-phone-pad'
//         placeholder="Enter your name ..........."
//         style={styles.input}
//         value={text}
//         onChangeText={(text) => setText(text)}
//         />
//       <Button title='Submit' onPress={handleSubmit}/>
//       {submittedText? (<Text style={{ fontSize: 20 }}>Result : {submittedText} </Text>) : null}
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue',
//     padding: 20,
//     gap: 20
//   },
//   text: {
//     fontSize: 35,
//     fontWeight: 'bold'
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 20,
//     padding: 10
//   }
// })

import { StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Search from './src/Screens/Search';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@react-native-vector-icons/ant-design/static';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          headerStyle: { backgroundColor: 'lightgreen' },
        }}
      />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          height: 100, paddingTop: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerPosition: 'left',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};


export default App;

const styles = StyleSheet.create({
});
