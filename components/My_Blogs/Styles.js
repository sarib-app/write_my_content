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
        // height:WindowHeight/3,
        borderColor:Colors.PrimaryColor,
        borderWidth:1,
        backgroundColor:Colors.BgCartColor,
        borderRadius:12,
        marginTop:20,
        alignItems:"center"
        

    },
    InnerCart:{

        flexDirection:"row",
        width:WindowWidth/1.2,
        justifyContent:"space-between",
        marginTop:10,
        alignItems:'center'
    },
    InnerCartI:{
        margin:10,
        flexDirection:"row",
        width:WindowWidth/1.2,
        justifyContent:"space-between"
    },
    Text: {
        color: Colors.FontColorI,
        fontWeight: "700",
        fontSize: 15,
        textAlignVertical:"center",
        textAlign:"center"
        // marginLeft:10
        // alignSelf:"center",
        
    },
    BodyText: {
        color: Colors.FontColorI,
        textAlign: "center",
        margin: 10,
        alignSelf: "center",
        fontSize: 13
    },
    Button:{
        borderRadius:8,
        backgroundColor:Colors.DarkBtnColor,
        marginBottom:10
    },
    ButtonText:{
color:Colors.PrimaryColor,
margin:14
    }

});

export default styles