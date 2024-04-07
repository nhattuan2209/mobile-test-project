import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2332',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 256,
        height: 256,
    },
    text:{
        fontSize: 32,
        fontFamily: 'AzoSans-Bold',
        color: 'white',
        fontWeight: '900'
    },
    brandText:{
        padding: 24
    },  
    google:{
        flexDirection:'row',
        width: 275,
        height: 42,
        borderRadius: 6,
        gap: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleText:{
        fontFamily: 'Product Sans Regular',
        color: 'black',
        fontSize: 18,
        fontWeight: '400'
    },
    line:{
        width: '50%',
        height: 1,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        gap: 10
    },
    bottom:{
        gap: 24
    },


    inputTitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        color: 'white',
    },
    inputEmail:{
        backgroundColor: 'white',
        borderRadius: 6,
        width: 328,
        height: 36,
        gap: 8,
        marginVertical: 10,
        paddingLeft: 45,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    eye:{
        width: 20,
        height: 20,
        top: 18,
        right: 15,
        position: 'absolute',
        zIndex: 1,
    },
    mail:{
        width: 20,
        height: 20,
        top: 18,
        left: 10,
        position: 'absolute',
        zIndex: 1
    },
    loginContainer:{
        paddingBottom: 12
    },
    backButton:{
        backgroundColor: '#56698F',
        width: 56,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    handleLoginContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nextButton:{
        backgroundColor: '#4ABF40',
        width: 249,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        gap: 4
    },
    loginText:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
    }
});
export default styles;