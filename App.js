import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home/Home';
import TakePictureScreen from './components/takePicture/TakePicture';
import DisplayPictureScreen from './components/displayPicture/DisplayPicture';
//generate stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
                      name="Home" 
                      component={Home} 
        />
        <Stack.Screen 
                      name="newPicture" 
                      component={TakePictureScreen} 
                      options={{ title: 'Take new picture' }}
        />
        <Stack.Screen 
                      name="displayPicture" 
                      component={DisplayPictureScreen} 
                      options={{ title: 'Display results' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

