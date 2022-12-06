import React, { useState } from 'react';
import {
  
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Alert
} from 'react-native';
import styles from './Styles';
import Header from '../GlobalStyles/Header';
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from '../GlobalStyles/Color';
import Ionicons from "react-native-vector-icons/Ionicons"
import BackBtn from '../GlobalStyles/BackButton';
import getAsync from '../GlobalVariables/AsyncData';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';
import { useNavigation } from '@react-navigation/native';
function ContactUs(){
const navigation=useNavigation()
  const asyncData= getAsync()
const [input,setInput]=useState("")
// const {limit ,setLimit} =useState(Number(item.no_of_alphabets))

const [loading,setLoading]=useState(false)






function OnpressPublish(){
 
 
    Alert.alert("Revise",`Number of alphabets is lesser than required.`)
 
}




  return(
    <View style={styles.Container}>
        <Header headertext={"Contact Us"} />
      <BackBtn/>

      <View style={[styles.Cart,{height:80}]}>
      <TextInput placeholder='Title of your query here.' 
style={{flex:1,color:Colors.FontColorI}}
placeholderTextColor={Colors.FontColorI}  

value={input}
onChangeText={(e)=>setInput(e)}
/>
      </View>
      <View style={styles.InputCart}>
<TextInput placeholder='Please enter details here.' 
style={{flex:1,color:Colors.FontColorI}}
 placeholderTextColor={Colors.FontColorI}  
multiline={true} 
numberOfLines={20}
value={input}
onChangeText={(e)=>setInput(e)}
/>
      </View>
<Pressable 
onPress={()=> OnpressPublish()}
style={styles.Button}>
<Text style={styles.ButtonText}>{loading === true ? "Loading..........":"Click here to submit."}</Text>
</Pressable>
    </View>
  )
}
export default ContactUs;

