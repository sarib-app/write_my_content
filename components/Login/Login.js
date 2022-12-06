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
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../GlobalVariables/Urls';
function Login() {
  const [IsSelected, setIsSelected] = useState("pending")
  const navigation = useNavigation()

  const [Phone, setPhone] = useState("")
  const [Password, setPassword] = useState("")
  const [Pressed, setPressed] = useState(false)




  function OnLoginPress() {
    setPressed(true)
    navigation.navigate("Home")

    if (Phone && Password) {
      // Login_Now()
      navigation.navigate("Home")


    }

  }

  function Login_Now() {
    var formdata = new FormData();
    formdata.append("phone", Phone);
    formdata.append("password", Password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${BaseUrl}login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.user) {
          AsyncStorage.setItem('user', JSON.stringify(result.user))
          AsyncStorage.setItem("token", result.token)
          navigation.navigate("Home")
        }
        if (result.message) {
          Alert.alert('oops', result.message)
        }


      })
      .catch(error => console.log('error', error));
  }









  return (
    <View style={styles.Container}>



      <Header headertext={"Login"} />


      <Text style={styles.LogoText}>
        Write{'\n'}My{'\n'}Content
      </Text>




      <Text style={styles.Text}>
        Phone

      </Text>
      <View style={[styles.Cart, { borderColor: Pressed === true && Phone === "" ? "red" : Colors.PrimaryColor }]}>


        <TextInput
          style={{ flex: 1, color: Colors.FontColorI }}
          placeholder="Enter phone here"
          placeholderTextColor={Colors.FontColorI}
          keyboardType="numeric"
          autoCapitalize='none'
          value={Phone}
          onChangeText={(e) => setPhone(e)}
        />
      </View>
      {Pressed === true && Phone === "" &&
        <Text style={{ color: 'red' }}>Please Enter Phone</Text>
      }


      <Text style={styles.Text}>
        Password

      </Text>

      <View style={[styles.Cart, { borderColor: Pressed === true && Password === "" ? "red" : Colors.PrimaryColor }]}>


        <TextInput
          style={{ flex: 1, color: Colors.FontColorI }}
          placeholder="Enter password here"
          placeholderTextColor={Colors.FontColorI}
          secureTextEntry={true}
          autoCapitalize='none'
          value={Password}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      {
        Pressed === true && Password === "" &&
        <Text style={{ color: 'red' }}>Please Enter pasword</Text>
      }

      <Pressable
        onPress={() => OnLoginPress()}
        style={styles.Button}>
        <Text style={styles.ButtonText}>Let's Do It!</Text>

      </Pressable>


      <Text style={{ color: Colors.FontColorI }}>Or</Text>
      <Text style={{ color: Colors.FontColorI, fontSize: 16, margin: 20, textDecorationLine: "underline" }}>Don't have an account? <Text

        onPress={() => navigation.navigate("Register")}
        style={{ color: Colors.PrimaryColor }}>Register Now.</Text></Text>
      <Text style={{ color: Colors.FontColorI, textDecorationLine: 'underline' }}>Privacy Policy</Text>



    </View>
  )
}
export default Login;

