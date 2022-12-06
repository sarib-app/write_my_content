import React, { useState } from 'react';
import {
  
    Pressable,
  Text,
  
  View,
  

} from 'react-native';
import GlobalStyles from './GlobalStyles';
import Ionicons from "react-native-vector-icons/Ionicons"
import Colors from './Color';
import { useNavigation } from '@react-navigation/native';

function BackBtn(){


const navigation = useNavigation()





  return(
    <Pressable
    onPress={()=> navigation.goBack()}
    
    style={{flexDirection:"row",marginTop:10,alignSelf:'flex-start',left:20}}>
    <Ionicons name='chevron-back-circle' size={20} color={Colors.PrimaryColor} /> 
    <Text style={{color:Colors.PrimaryColor}}> Go Back</Text>
    </Pressable>



  )
}
export default BackBtn;

