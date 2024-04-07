import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card:{
        padding: 12,
        gap: 6
    },
    subContainer:{
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#2F374B',
        borderRadius: 6,
        gap: 16,
        // justifyContent: 'space-evenly',
    },
    progress:{
        width: 64,
        height: 64
    },
    subFirstText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: 'white',
    },
    subSecondText:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'white',
    },
    subTextContainer:{
        gap: 6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    infoCard:{
        backgroundColor: '#2F374B',
        padding: 16,
        gap: 16,
        borderRadius: 6
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleLeft:{
        flexDirection: 'row',
        gap: 8
    },
    titleInfo:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: 'white',
    },
    infoImg:{
        width: 24,
        height: 24
    },
    yesImg:{
        width: 24,
        height: 24
    },
    section1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar:{
        width: 108,
        height: 108,
        borderRadius: 100
    },
    avaText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: 'white',
    },
    avatarContainer:{
        gap: 4,
        // justifyContent: 'center'
    },
    inputName:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 213,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 40,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    nameSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        // height: 40,
        // margin: 10
    },
    userIcon:{
        width: 20,
        height: 20,
        margin: 8,
        left: 2,
        position: 'absolute',
        zIndex: 1

    },
    inputNameSection:{
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    pen:{
        width: 20,
        height: 20,
        margin: 8,
        right: 2,
        position: 'absolute',
        zIndex: 1

    },
    inputTitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        color: 'white',
    },
    inputEmail:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 337,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 45,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    mail:{
        width: 20,
        height: 20,
        margin: 8,
        left: 15,
        position: 'absolute',
        zIndex: 1
    },
    penMail:{
        width: 20,
        height: 20,
        margin: 8,
        right: 15,
        position: 'absolute',
        zIndex: 1,
    },
    mapPin:{
        width: 20,
        height: 20,
        margin: 8,
        left: 15,
        position: 'absolute',
        zIndex: 1
    },
    arrowDown:{
        width: 20,
        height: 20,
        margin: 8,
        right: 15,
        position: 'absolute',
        zIndex: 1,
    },
    flag:{
        width: 20,
        height: 20,
        margin: 8,
        left: 15,
        position: 'absolute',
        zIndex: 1
    },
    mapVillage:{
        width: 20,
        height: 20,
        top: 15,
        left: 10,
        position: 'absolute',
        zIndex: 1
    },
    penPostal:{
        width: 20,
        height: 20,
        top: 15,
        right: 15,
        position: 'absolute',
        zIndex: 1,
    },
    inputVillage:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 160.5,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 45,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    address:{
        // flexDirection: 'row'
    },
    addressContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        gap: 16
        
    },
    inputPay:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 337,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    inputTitlePay:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        color: 'red',
    },
    inputPaySmall:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 160.5,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    buttonGreen:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#4ABF40',
        width: 329,
        height: 56,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        gap: 4
    },
    buttonGreenText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: 'white'
    },
    line:{
        width: 329,
        height: 2,
        backgroundColor: '#353946',
        alignSelf: 'center',
        borderRadius: 10,
        gap: 10
    },

    buttonBlue:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#56698F',
        width: 329,
        height: 56,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        gap: 4
    },
    penImg:{
        position: 'absolute',
        zIndex: 1,
        left: 70,
        top: 20,
        width: 36,
        height: 36
    }
});
export default styles;