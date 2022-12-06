import React, { useState } from 'react';
import {

  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './Styles';
import Header from '../GlobalStyles/Header';
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from '../GlobalStyles/Color';
import Ionicons from "react-native-vector-icons/Ionicons"
import BackBtn from '../GlobalStyles/BackButton';
import { useNavigation } from '@react-navigation/native';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';
import Profile from '../../assets/Images/Profile.png'

function UpdateProfile() {
  const [IsSelected, setIsSelected] = useState("pending")
  const navigation = useNavigation()
const [phone, setPhone]=useState("")
const [password, setPassword]=useState("")
const [username, setUsername]=useState("")
const [email, setEmail]=useState("")
const [Pressed, setPressed]=useState(false)


  function OnUpdatePress(){
if(phone && password && username && email){

    Update_Now()  

}
else{
 Alert.alert("Error","Please Check Information and try again.")
}
  }
  function Update_Now(){
    
  }










  return (
    <View style={styles.Container}>
        <ScrollView
        contentContainerStyle={{alignItems:'center'}}
        >


      <Header headertext={"Update Profile"} />
      <BackBtn />


<Image source={Profile} style={{width:100,height:100}} />

      <Text style={styles.Text}>
Email

      </Text>
    <View style={styles.Cart}>


<TextInput
style={{flex:1,color:Colors.FontColorI}}
placeholder="Enter Email here"
placeholderTextColor={Colors.FontColorI}
keyboardType="email-address"
autoCapitalize='none'
value={email}
onChangeText={(e)=> setEmail(e)}
/>
    </View>








    <Text style={styles.Text}>
Phone

      </Text>
    <View style={styles.Cart}>


<TextInput
style={{flex:1,color:Colors.FontColorI}}
placeholder="Enter phone here"
placeholderTextColor={Colors.FontColorI}
keyboardType="numeric"
autoCapitalize='none'
value={phone}
onChangeText={(e)=> setPhone(e)}
/>
    </View>


    
    <Text style={styles.Text}>
Password

      </Text>
    <View style={styles.Cart}>


<TextInput
style={{flex:1,color:Colors.FontColorI}}
placeholder="Enter password here"
placeholderTextColor={Colors.FontColorI}
secureTextEntry={true}
autoCapitalize='none'
value={password}
onChangeText={(e)=> setPassword(e)}
/>
    </View>


<Pressable 

onPress={()=> OnUpdatePress()}
style={styles.Button}>
    <Text style={styles.ButtonText}>Update Now!</Text>

</Pressable>




<View style={{width:10,height:200}}></View>

</ScrollView>

    </View>
  )
}
export default UpdateProfile;

