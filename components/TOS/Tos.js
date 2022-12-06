import React, { useState } from 'react';
import {
  
  Text,
  View,
Modal
} from 'react-native';
import styles from './Styles';
import WebView from 'react-native-webview';
import { StackRouter } from '@react-navigation/native';
import Colors from '../GlobalStyles/Color';
import { useNavigation } from '@react-navigation/native';
function Tos(){
    const navigation = useNavigation()
return(
    <Modal
    tra
    >

    <View style={styles.Container}>
        <View style={styles.header}>
        <Text 
        onPress={()=> navigation.goBack()}
        style={styles.text}>Close It</Text>

<Text style={styles.text}>I aknowledge</Text>

        </View>
        <View style={styles.WebDesign}> 

<WebView 

style={styles.WebDesign}
source={{ uri: 'https://www.freeprivacypolicy.com/live/45d021d6-7a5b-4eb4-a6d3-b433ded8e9d0' }} />
</View>

    </View>
    </Modal>

)
}
export default Tos;

