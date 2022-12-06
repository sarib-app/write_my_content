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
    Cart: {
        width: WindowWidth / 1.1,
        // height:WindowHeight/3,
        borderColor: Colors.PrimaryColor,
        borderWidth: 1,
        backgroundColor: Colors.BgCartColor,
        borderRadius: 12,
        marginTop: 20,
    },
    ProgressCarts: {
        width: WindowWidth / 3,
        height: WindowHeight / 7,
        backgroundColor: Colors.BgColor,
        borderRadius: 10,
        borderColor: Colors.FontColorI,
        fontWeight: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center"
    },
    PorfilePic: {
        borderRadius: 1000,
        width: 80,
        height: 80,
        margin: 10
    },
    Text: {
        color: Colors.FontColorI,
        fontWeight: "700",
        fontSize: 15,
    },
    BodyText: {
        color: Colors.FontColorI,
        textAlign: "center",
        margin: 10,
        alignSelf: "center",
        fontSize: 13
    },
    SmallContainer: {
        width: WindowWidth / 1.2,
        // height:WindowHeight/7,
        backgroundColor: Colors.BgColor,
        borderRadius: 10,
        borderColor: Colors.FontColorI,
        fontWeight: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center"
    },
    SmallTitle:
        { color: Colors.PrimaryColor, fontWeight: 'bold', fontSize: 15, marginTop: 10 },
    SideBar: {
        position: "absolute", left: 0, top: 150, width: WindowWidth / 8, height: WindowHeight / 2.5,
        backgroundColor: Colors.sidebarColor,
        borderTopRightRadius: 20, borderBottomRightRadius: 20,
        alignItems: "center"

    },
    SideBarText: { color: Colors.FontColorI, textAlign: "center", fontSize: 12 },

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