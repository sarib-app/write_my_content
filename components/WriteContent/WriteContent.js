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
function WriteContent({route}){
const navigation=useNavigation()
  const asyncData= getAsync()
const [input,setInput]=useState("")
// const {limit ,setLimit} =useState(Number(item.no_of_alphabets))

const item = route.params.items
const [loading,setLoading]=useState(false)






function OnpressPublish(){
  if(input.length === Number(item.no_of_alphabets)){
    PublishContent()
  }
  else{
    Alert.alert("Revise",`Number of alphabets is lesser than required.`)
  }
}


function PublishContent(){
setLoading(true)
  var formdata = new FormData();
  formdata.append("Writer_id", asyncData.user.id);
  formdata.append("Writer_Name", asyncData.user.username);
  formdata.append("Topic_id", item.id);
  formdata.append("Topic_Ttitle", item.title);
  formdata.append("Title", item.title);
  formdata.append("Body", input);
  formdata.append("additional_note", "nothing");
  formdata.append("status", "Pending");
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(`${BaseUrl}${EndPoints.AddContent}`, requestOptions)
    .then(response =>

      response.json())
    .then(result => {console.log(result)
      if(result.status==="200"){
        navigation.navigate('Home')
        setLoading(false)

        Alert.alert("Congratulations!","Your content is submitted for review.")
      }
    })
    .catch(error => {
      setLoading(false)
      Alert.alert("Error","Something went wrong, please try again later.")
      console.log('error', error)
    });


}


  return(
    <View style={styles.Container}>
        <Header headertext={"Write Content"} />
      <BackBtn/>

      <View style={styles.Cart}>
<Text style={styles.Text}>Write content about "{item.title}"</Text>
      </View>
      <Text style={{alignSelf:'flex-end',right:20,color:Colors.FontColorI,marginTop:5}}>{input.length} / {item.no_of_alphabets}</Text>

      <View style={styles.InputCart}>
<TextInput placeholder='Start writing here......' 
style={{flex:1,color:Colors.FontColorI}}
 placeholderTextColor={Colors.FontColorI}  
multiline={true} 
numberOfLines={20}
maxLength={Number(item.no_of_alphabets)}
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
export default WriteContent;

