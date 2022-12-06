import React, { useEffect, useState ,useCallback  } from 'react';
import {
  
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  RefreshControl
} from 'react-native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import styles from './Styles';


import Header from '../GlobalStyles/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Content from './Content';
import BaseUrl from '../GlobalVariables/Urls';
import EndPoints from '../GlobalVariables/EndPoints';



function Dashboard(){
  const [refreshing, setRefreshing] = useState(false);


const [user,setUser]=useState()
const [token,setToken]=useState()
const [Points, setPoints] = useState(0)

useEffect(()=>{
  getAsyncData()
    },[])
    async function getAsyncData () {
      const user_data = await AsyncStorage.getItem('user')
      const token = await AsyncStorage.getItem('token')
      let user=JSON.parse(user_data) 
      if(token){
        setUser(user)
        setToken(token)
        getPoints(user.id)
      }
    }

    function getPoints(id){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${BaseUrl}${EndPoints.getPoints}/${id}`, requestOptions)
        .then(response => response.json())
        .then(result =>{
           setPoints(result.Total_points)
           setRefreshing(false)
          })
        .catch(error => console.log('error', error));

    }

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      getAsyncData()
    }, [])
  

  return(
    <View style={styles.Container}>
        <Header headertext={"Dashboard"} />
        <ScrollView
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}

          />
        }
        showsVerticalScrollIndicator={false}
        >
{
  user &&
  
<Content 
user={user}
Points={Points}
/>
}

<View style={{height:70,width:50}}></View>
</ScrollView>

    </View>
  )
}
export default Dashboard;

