import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useEffect,useState} from "react";


function getAsync(){
    const [asyncData,setAsyncData]=useState({
        user:0,
        token:0
    })
    useEffect(()=>{
        getAsyncData()
          },[])
          async function getAsyncData () {
            const user_data = await AsyncStorage.getItem('user')
            const token = await AsyncStorage.getItem('token')
            let user=JSON.parse(user_data) 
            if(token){
        setAsyncData({
            user:user,
            token:token
        })
            }
          }
       return asyncData
     
}
export default getAsync