import React, { useState } from 'react';
import {
  
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import styles from './Styles';
import Icon from "react-native-vector-icons/FontAwesome5"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"


import Dashboard from '../Dashboard/Dashboard';
import Colors from '../GlobalStyles/Color';
import { useNavigation } from '@react-navigation/native';
import Tos from '../TOS/Tos';
function Home(){

const navigation = useNavigation()
const [sideBarOpen,setSideBarOpen]=useState(false)

const [IsSelected , setIsSelected]=useState(2)


function OnLogoutPressed(){
navigation.navigate("Register")
}





function ChangeSelection(val){

navigation.navigate(val)
}

function SideBarOpenButton(){
    return(
        <View style={styles.SideBarButton}>

            <Pressable
            onPress={()=> setSideBarOpen(true)}
            style={{margin:20,justifyContent:'center',alignItems:"center"}}>

            
   <AntDesign size={20} color={Colors.PrimaryColor} name="folderopen" />
<Text style={styles.SideBarText}>Open</Text>
</Pressable>
        </View>
    )
}

function SideBar(){
    return(
<View style={styles.SideBar}>
    <View style={{marginBottom:10,marginTop:10}}> 

 
    <ScrollView
    contentContainerStyle={{alignItems:"center"}}
    >
   <Icon
   onPress={()=> setSideBarOpen(false)}
   size={20} color={Colors.DangerColor} name="window-close" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Close</Text>
    {/* <MaterialCommunityIcons  onPress={() =>ChangeSelection(1)}
    size={24} color={Colors.PrimaryColor} name="view-dashboard" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Dash Board</Text> */}
    <Icon 
        onPress={() => ChangeSelection("NewTasks")}

    size={20} color={Colors.PrimaryColor} name="tasks" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>New Tasks</Text>
    <Icon onPress={() => ChangeSelection("My_Blogs")}
     size={20} color={Colors.PrimaryColor} name="blog" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>My Blogs</Text>
    <Icon
    
    onPress={()=> Alert.alert("Sorry!",`You can not withdraw anything right now.Unlock "Partner" level to withdraw money.`)}
    size={20} color={Colors.PrimaryColor} name="money-check" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>With Draw</Text>
    <Icon size={20} color={Colors.PrimaryColor} name="question-circle" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>How does it work</Text>
    <MaterialIcon 
    onPress={() => ChangeSelection("Tos")}
    size={20} color={Colors.PrimaryColor} name="privacy-tip" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Privacy Policy</Text>
    <MaterialIcon size={20} color={Colors.PrimaryColor} name="privacy-tip" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Terms of service</Text>


    <MaterialCommunityIcons size={20} color={Colors.PrimaryColor} name="jquery" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>About Us</Text>
    

    <MaterialIcon 
    
    onPress={()=> navigation.navigate("ContactUs")}
    size={20} color={Colors.PrimaryColor} name="perm-contact-cal" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Contact Us</Text>
    <MaterialCommunityIcons 
    onPress={()=> OnLogoutPressed()}
    size={20} color={Colors.DangerColor} name="logout" style={{marginTop:10}}/>
    <Text style={styles.SideBarText}>Logout</Text>


    </ScrollView>
    </View>
</View>
    )
}





  return(
    <View style={styles.Container}>


<Dashboard/>
    
    

{sideBarOpen === true?
<SideBar/>
:
<SideBarOpenButton/>
}
    </View>
  )
}
export default Home;

