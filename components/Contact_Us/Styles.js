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
    Text: {
        color: Colors.FontColorI,
        margin: 15,
        fontWeight: "bold",
        fontSize: 16
    },

    Cart: {
        width: WindowWidth / 1.1,
        // height:WindowHeight/3,
        borderColor: Colors.PrimaryColor,
        borderWidth: 1,
        backgroundColor: Colors.BgCartColor,
        borderRadius: 12,
        marginTop: 20,
        alignItems: "center"


    },


    InputCart: {
        width: WindowWidth / 1.1,
        height:WindowHeight/2.5,
        borderColor: Colors.PrimaryColor,
        borderWidth: 1,
        backgroundColor: Colors.BgCartColor,
        borderRadius: 12,
        margin: 10,
        // alignItems: "center"
    },


    InnerCart: {

        flexDirection: "row",
        width: WindowWidth / 1.2,
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: 'center'
    },

    Button: {
        borderRadius: 8,
        backgroundColor: Colors.DarkBtnColor,
        borderColor:Colors.PrimaryColor,
        borderWidth:0.7,
        marginBottom: 10
    },
    ButtonText: {
        color: Colors.PrimaryColor,
        margin: 14
    }

});

export default styles