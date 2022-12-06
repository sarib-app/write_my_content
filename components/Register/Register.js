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
import Tasks from '../../Data/Tasks';
import Colors from '../GlobalStyles/Color';
import Ionicons from "react-native-vector-icons/Ionicons"
import BackBtn from '../GlobalStyles/BackButton';
import { useNavigation } from '@react-navigation/native';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Register() {
  const [IsSelected, setIsSelected] = useState("pending")
  const navigation = useNavigation()
const [phone, setPhone]=useState("")
const [password, setPassword]=useState("")
const [username, setUsername]=useState("")
const [email, setEmail]=useState("")
const [Pressed, setPressed]=useState(false)


  function OnRegisterPress(){
if(phone && password && username && email){

Register_Now()  

}
else{
 Alert.alert("Error","Please Check Information and try again.")
}
  }
  function Register_Now(){
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("password_confirmation", password);
    formdata.append("role_id", 2);
    formdata.append("profile_pic", "");
    formdata.append("profile_approved", "Candidate");
    formdata.append("phone", phone);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${BaseUrl}${EndPoints.Register}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.message){
          Alert.alert("Oops",result.message)
        }
        
if(result.user){
  AsyncStorage.setItem("user",JSON.stringify(result.user))
  navigation.navigate('Home')
}
      })
      .catch(error => console.log('error', error));
  }










  return (
    <View style={styles.Container}>
        <ScrollView
        contentContainerStyle={{alignItems:'center'}}
        >


      <Header headertext={"Register"} />


<Text style={styles.LogoText}>
    Write{'\n'}My{'\n'}Content
</Text>


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
Username

      </Text>
    <View style={styles.Cart}>


<TextInput
style={{flex:1,color:Colors.FontColorI}}
placeholder="Enter username here"
placeholderTextColor={Colors.FontColorI}
autoCapitalize='none'
value={username}
onChangeText={(e)=> setUsername(e)}
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

onPress={()=> OnRegisterPress()}
style={styles.Button}>
    <Text style={styles.ButtonText}>Join Us Now!</Text>

</Pressable>


<Text style={{color:Colors.FontColorI}}>Or</Text>
<Text style={{color:Colors.FontColorI,fontSize:16,margin:10,textDecorationLine:"underline"}}>Already have an account? 
<Text 
onPress={()=> navigation.navigate('Login')}
style={{color:Colors.PrimaryColor}}> Login Now.</Text></Text>
<Text style={{color:Colors.FontColorI,textDecorationLine:'underline'}}>Privacy Policy</Text>

<View style={{width:10,height:200}}></View>

</ScrollView>

    </View>
  )
}
export default Register;

