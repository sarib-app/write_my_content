import React,{useEffect} from 'react';
import {
  StyleSheet,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home/Home';

import NewTasks from './components/Tasks/NewTasks';
import WriteContent from './components/WriteContent/WriteContent';
import My_Blogs from './components/My_Blogs/My_Blogs';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import ContactUs from './components/Contact_Us/Contact_us';
import Tos from './components/TOS/Tos';
const Stack = createNativeStackNavigator();

const App = () => {



return( 
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Register"   screenOptions={{
      headerShown: false
    }} >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Register" component={Register} />

    <Stack.Screen name="NewTasks" component={NewTasks} />
    <Stack.Screen name="WriteContent" component={WriteContent} />
    <Stack.Screen name="My_Blogs" component={My_Blogs} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen name="Tos" component={Tos} />








  </Stack.Navigator>
</NavigationContainer>
)

};



export default App;
