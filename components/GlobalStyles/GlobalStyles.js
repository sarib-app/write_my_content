import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';
import Colors from './Color';
  const WindowWidth = Dimensions.get('window').width
  const WindowHeight = Dimensions.get('window').height; 
  const GlobalStyles = StyleSheet.create({

   Header:{
      width:WindowWidth,
      height:WindowHeight/12,
      backgroundColor:Colors.PrimaryColor,
      alignItems:"center",
      justifyContent:"center"
    },
    HeaderText:{
        color:Colors.FontColorI,
        fontWeight:"bold",
        fontSize:22
    },
    PorfilePic:{
        borderRadius:1000,
        width:50,
        height:50
    }
  });

  export default GlobalStyles