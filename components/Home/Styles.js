import {
    StyleSheet,
    Dimensions
} from 'react-native'
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
    SideBar: {
        position: "absolute", left: 0, top: 150, width: WindowWidth / 8, height: WindowHeight / 2.5,
        backgroundColor: Colors.sidebarColor,
        borderTopRightRadius: 20, borderBottomRightRadius: 20,
        alignItems: "center"
    },
    SideBarText: {
        color: Colors.FontColorI,
        textAlign: "center",
        fontSize: 12
    },
    SideBarButton: {
        position: "absolute", left: 0, top: 250,
        backgroundColor: Colors.sidebarBtnColor,
        borderRadius: 1000,
        alignItems: "center", justifyContent: "center",
        shadowOffset: { width: 30, height: 30 },
        shadowColor: 'white',
        shadowOpacity: 2,
        elevation: 5,
    },


});

export default styles