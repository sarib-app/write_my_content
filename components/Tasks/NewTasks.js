import React, { useState , useEffect} from 'react';
import {
  
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './Styles';
import Header from '../GlobalStyles/Header';
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from '../GlobalStyles/Color';
import Ionicons from "react-native-vector-icons/Ionicons"
import BackBtn from '../GlobalStyles/BackButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';
function NewTasks(){
  const [Tasks,setTask]=useState([])
  const [loading,setLoading]=useState(true)


  const navigation = useNavigation()



  useEffect(()=>{
    getTasks()
      },[])
  
   
  
      function getTasks(){
  
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`${BaseUrl}${EndPoints.newTasks}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setLoading(false)
            setTask(result)
            console.log(result)})
          .catch(error => console.log('error', error));
  
      }















function TaskList({item}){

const [isOpen,setIsOpen] = useState(false)






  return(
    <View style={styles.Cart}>
    <View style={styles.InnerCart}>
      <View style={{width:"90%"}}>

    <Text style={[styles.Text,{fontSize:18,textAlign:'left'}]}>
{item.title}
</Text>
      </View>
<Icon

onPress={()=> setIsOpen((prev)=> !prev)}
size={20} solid={true} color={"white"} name= {isOpen === true ?"angle-up":"angle-down"}  />
    </View>
        <View style={styles.InnerCartI}>
    <Text style={styles.Text}>
Reward{'\n'}<Text style={{color:Colors.PrimaryLight}}>
{item.rewards}</Text>
</Text>

{/* <Text style={styles.Text}>
Published at{'\n'}<Text style={{color:Colors.PrimaryLight}}>
{item.published_at}</Text>
</Text> */}

 <Text style={styles.Text}>
Dead Line{'\n'}<Text style={{color:Colors.PrimaryLight}}>
{item.deadline}</Text>
</Text>
<Text style={styles.Text}>
Characters{'\n'}<Text style={{color:Colors.PrimaryLight}}>
{item.no_of_alphabets}</Text>
</Text>
    </View>
    {
      isOpen === true ?
      <>

    <Text style={styles.BodyText}>
      {item.details}
    </Text>
    <Pressable 
    onPress={()=>navigation.navigate("WriteContent",{items:item})}
    style={styles.Button}>
<Text style={styles.ButtonText}>Lets Do it</Text>
    </Pressable>
</>

:
null}
</View>
  )
}






  return(
    <View style={styles.Container}>
        <Header headertext={"New Tasks"} />
      <BackBtn/>
      {loading===true
      
      ?<Text style={{color:Colors.FontColorI,fontWeight:"bold",fontSize:20}}>Loading....</Text>
      :
      Tasks.length >0?
      
<FlatList

data={Tasks.sort((a,b)=> b.id - a.id)}
renderItem={({item})=>
  <TaskList item={item} />
}
    
/>:
<Text style={{color:Colors.FontColorI,fontWeight:"bold",fontSize:20,alignSelf:"center"}}>Oops! No Tasks Found.</Text>
}
    </View>
  )
}
export default NewTasks;

