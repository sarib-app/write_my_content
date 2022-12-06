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
        alignItems: "center",
    },

    Cart:{
        width:WindowWidth/1.1,
        height:WindowHeight/13.5,
        borderColor:Colors.PrimaryColor,
        borderWidth:1,
        backgroundColor:Colors.BgCartColor,
        borderRadius:6,
        margin:5,
        // alignItems:"center"
        

    },
    Text:{
color:Colors.FontColorI,
fontWeight:'700',
fontSize:14,
alignSelf:'flex-start',
left:20,
marginTop:5

    },

    Button:{
        borderRadius:8,
        backgroundColor:Colors.DarkBtnColor,
        marginTop:30
    },
    ButtonText:{
color:Colors.PrimaryColor,
margin:14
    },
    LogoText:{
        color:Colors.FontColorI,
        fontSize:25,
        textAlign:"center",
        fontStyle:"italic",
        fontWeight:"bold",
        marginTop:30,
        marginBottom:10
    }

});

export default styles