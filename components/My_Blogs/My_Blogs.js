import React, { useState,useEffect } from 'react';
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
import Tasks from '../../Data/Tasks';
import Colors from '../GlobalStyles/Color';
import Ionicons from "react-native-vector-icons/Ionicons"
import BackBtn from '../GlobalStyles/BackButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';
import moment from 'moment/moment';
function My_Blogs() {
  const [ IsSelected, setIsSelected ] = useState("Pending")
  const [ loading, setLoading ] = useState(true)

  const navigation = useNavigation()

const [ Contents,setContent ]=useState([])







  
  useEffect(()=>{
    getAsyncData()
      },[])
      async function getAsyncData () {
        const user_data = await AsyncStorage.getItem('user')
        let user=JSON.parse(user_data) 
        if(user){
          GetBlogs(user.id)
        }
      }
   
  
      function GetBlogs(id){  
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        fetch(`${BaseUrl}${EndPoints.MyContents}/${id}`, requestOptions)
          .then(response => response.json()
          )
          .then(result =>{
            
            if(result.content){
              setLoading(false)
setContent(result.content)
            }
            console.log(result)}
          )
          .catch(error => console.log('error', error));
  
      }
  
  


  function TaskList({ item }) {

    const [isOpen, setIsOpen] = useState(false)



    return (
      <View style={styles.Cart}>
        <View style={styles.InnerCart}>
          <View style={{ width: "90%" }}>

            <Text style={[styles.Text, { fontSize: 18, textAlign: 'left' }]}>
              {item.Title}
            </Text>
          </View>
          <Icon

            onPress={() => setIsOpen((prev) => !prev)}
            size={20} solid={true} color={"white"} name={isOpen === true ? "angle-up" : "angle-down"} />
        </View>
        <View style={styles.InnerCartI}>
          <Text style={styles.Text}>
            Submission Date{'\n'}<Text style={{ color: Colors.PrimaryLight }}>
              {moment(item.created_at).format("DD-MM-YYYY")}</Text>
          </Text>

          {/* <Text style={styles.Text}>
Published at{'\n'}<Text style={{color:Colors.PrimaryLight}}>
{item.published_at}</Text>
</Text> */}

          <Text style={styles.Text}>
            Status{'\n'}<Text style={{ color: Colors.PrimaryLight }}>
              {item.status}</Text>
          </Text>
          <Text style={styles.Text}>
            Points Recieved{'\n'}<Text style={{ color: Colors.PrimaryLight }}>
              {item.points}</Text>
          </Text>
        </View>
        {
          isOpen === true ?
            <>

              <Text style={styles.BodyText}>
                {item.Body}
              </Text>
              {/* <Pressable 
    onPress={()=>navigation.navigate("WriteContent",{items:item})}
    style={styles.Button}>
<Text style={styles.ButtonText}>Lets Do it</Text>
    </Pressable> */}
            </>

            :
            null}
      </View>
    )
  }



  function ChangeSelection(val) {
    setIsSelected(val)
  }


  return (
    <View style={styles.Container}>
      <Header headertext={"My Content"} />
      <BackBtn />
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-evenly' }}>
        <Pressable

          onPress={() => ChangeSelection("Pending")}
          style={[styles.Button, { margin: 5, backgroundColor: IsSelected === "Pending" ? Colors.DarkBtnColor : Colors.BgCartColor }]}>
          <Text style={styles.ButtonText}>pending</Text>
        </Pressable>

        <Pressable
          onPress={() => ChangeSelection("Rejected")}

          style={[styles.Button, { margin: 5, backgroundColor: IsSelected === "Rejected" ? Colors.DarkBtnColor : Colors.BgCartColor }]}>
          <Text style={styles.ButtonText}>Rejected</Text>
        </Pressable>

        <Pressable
          onPress={() => ChangeSelection("Approved")}

          style={[styles.Button, { margin: 5, backgroundColor: IsSelected === "Approved" ? Colors.DarkBtnColor : Colors.BgCartColor }]}>
          <Text style={styles.ButtonText}>Approved</Text>
        </Pressable>
      </View>
      {loading === true ?
      
    
      <Text style={{color:Colors.FontColorI,fontWeight:"bold",fontSize:20}}>Loading....</Text>
  :
  Contents.length > 0 ?
  
  
  <FlatList
  
  data={Contents.filter((item)=>item.status === IsSelected).sort((a,b)=> b.id - a.id)}
  renderItem={({ item }) =>
  <TaskList item={item} />
}

/>
:<Text style={{color:Colors.FontColorI,fontWeight:"400",fontSize:14,textAlign:"center",margin:10,top:150}}>
You
 don't have any blog right now, go in new task and write
 content against any task, your written content will appear here!</Text>
    
  }
    </View>
  )
}
export default My_Blogs;

