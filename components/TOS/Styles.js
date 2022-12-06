import {
    StyleSheet,
    Dimensions
} from 'react-native'
import { Button } from 'react-native-paper';
import Colors from '../GlobalStyles/Color';
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    Container: {
        width: WindowWidth,
        height: WindowHeight,
        backgroundColor: Colors.BgColor,
      
    },
    WebDesign:{
        width:WindowWidth,
        height:WindowHeight,
        borderRadius:10,
    },
    header:{
        width:WindowWidth,
        height:WindowHeight/11,
        backgroundColor:Colors.PrimaryColor,
        justifyContent:'space-between',
        flexDirection:"row",
        
        alignItems:"center"    
    },
    text:{
    fontWeight:"bold",
    fontSize:18,
    margin:10,
    color:"black"

    }

});

export default styles