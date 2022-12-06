
import React from 'react';
import {
  
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Profile from '../../assets/Images/Profile.png'
import styles from './Styles';
import Icon from "react-native-vector-icons/FontAwesome5"
import Colors from '../GlobalStyles/Color';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Content({user , Points}){
    const navigation = useNavigation()
    return(
        
        
        <>
        
        <View style={styles.Cart}>
    <View style={{flexDirection:'row',alignItems:'center'}}>

<Image
style={styles.PorfilePic}
source={Profile}

/>
<View>
<Text style={styles.Text} >@{user.username}</Text>
<Text  style={styles.Text}>{user.phone}</Text>
</View>
<Icon 
onPress={()=> navigation.navigate('UpdateProfile')}
size={20}
color={Colors.PrimaryColor}
name='edit'
style={{left:105}}
/>
</View>
<View style={{margin:10}}>
<Text style={styles.Text}>{user.email}</Text>
<Text style={[styles.Text,{color:Colors.PrimaryColor}]}>Account Title:<Text style={{color:"white"}}> {user.profile_approved}</Text></Text>
</View>
</View>

<View style={[styles.Cart,{flexDirection:'row',justifyContent:'center'}]}>
<View style={styles.ProgressCarts}>
<Icon size={35} color={Colors.PrimaryColor} name="coins"/>
<Text style={[styles.SmallTitle,{color:"white"}]}>Points:<Text style={{color:Colors.PrimaryColor}}> {Points}</Text></Text>
</View>
<View style={styles.ProgressCarts}>
<Icon size={35} color={Colors.PrimaryColor} name="money-bill-wave"/>
<Text style={[styles.SmallTitle,{color:"white"}]}>Earning:<Text style={{color:Colors.PrimaryColor}}> 0$</Text></Text>
</View>
</View>

<View style={styles.Cart}>
<Text style={[styles.Text,{alignSelf:'center',marginTop:10}]}>
What Is An Account Title?  
</Text>
<Text style={styles.BodyText}>
Your <Text style={{color:Colors.PrimaryColor}}>account </Text>title is your Profile level, your profile level is
dependet on your performance.Each <Text style={{color:Colors.PrimaryColor}}>Profile Level </Text>
<Text style={{color:Colors.PrimaryColor}}>unlocks</Text> at a specific Point.

</Text>
</View>

<View style={styles.Cart}>
<Text style={[styles.Text,{alignSelf:'center',marginTop:10}]}>
There are three Account Titles 
</Text>

<View style={styles.SmallContainer}>
<Text style={styles.SmallTitle}>Candidate</Text>
<Text style={styles.BodyText}>Basic Level its unlocked by default.</Text>
</View>

<View style={styles.SmallContainer}>
<Text style={styles.SmallTitle}>Partner</Text>
<Text style={styles.BodyText}>In this level you start earning money, it unlocks at <Text style={{color:Colors.PrimaryColor}}>100+</Text> Point</Text>
</View>

<View style={styles.SmallContainer}>
<Text style={styles.SmallTitle}>Premium Partner</Text>
<Text style={styles.BodyText}>In this level you start earning money at double rate, it unlocks at <Text style={{color:Colors.PrimaryColor}}>1500+ USD</Text></Text>
</View>





</View>
<View style={styles.Cart}>
<Text style={[styles.Text,{alignSelf:'center',marginTop:10}]}>
Mechanism?  
</Text>
<Text style={styles.BodyText}>
If you are at candidate level You have to submit your blog on daily tasks admin will<Text style={{color:Colors.PrimaryColor}}> checkout </Text>your submitted content if its meeting the requirment they will give you extra points and bonus otherwise you will 
get <Text style={{color:Colors.PrimaryColor}}>5 Points </Text> on each considered submission.
Once you <Text style={{color:Colors.PrimaryColor}}> cross 1000 </Text> 
Points your next level will be unlocked which is called<Text style={{color:Colors.PrimaryColor}}> "Partner Level"</Text>
In partner level you will recieve <Text style={{color:Colors.PrimaryColor}}>advance</Text> 
level tasks, you have to write content according to the tasks.On each considered submission you will get real money in <Text style={{color:Colors.PrimaryColor}}>USD</Text>. The price will vary as per the task. 
Once you have Successfully earned <Text style={{color:Colors.PrimaryColor}}> "1500$"</Text> you will 
enter in next level called <Text style={{color:Colors.PrimaryColor}}>"Premium Partner"</Text> 
premium partner is same as "Partner" Level but at 
this level you will get double price on each successfull 
submission.
In Case You do not understand it you can contact us on our support or see our "How Does It Work"  section in side bar.


</Text>
</View>
        
        </>
    )
}
export default Content