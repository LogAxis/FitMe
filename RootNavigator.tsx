import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import VideosScreen from './VideoScreen';
import TailorScreen from './TailorScreen';
import ProfileScreen from './ProfileScreen';
import AnalyticsScreen from './assets/AnalyticsScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Videos: undefined;
  Tailor: undefined;
  Profile: undefined;
  Analytics: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Videos" component={VideosScreen}/>
        <Stack.Screen name="Tailor" component={TailorScreen}/>
        <Stack.Screen name="Analytics" component={AnalyticsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
