import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2332',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 32
    },
    logo:{
        alignSelf: 'center'
    },
    policyContainer:{
        gap: 24,
        padding: 32,
        alignItems: 'center'
    },
    policyButton:{
        width: 328,
        height: 43,
        borderRadius: 6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    policyText:{
        fontSize: 16,
        color: 'black',
        fontFamily: 'Montserrat-Bold',
    },
    checkContainer:{
        flexDirection: 'row',
        gap: 8,
        padding: 12
    },
    check:{
        // borderRadius: 3,
        // width: 20,
        // height: 20,
        // borderColor: 'white',
        // borderWidth: 1,
    },
    textCheck:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
    },
    bottomContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        gap: 6
    },
    buttonBack:{
        width: 56,
        height: 56,
        backgroundColor: '#56698F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNext:{
        flexDirection: 'row',
        width: 260,
        height: 56,
        borderRadius: 6,
        backgroundColor: '#4ABF40',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextText:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
    }
});
export default styles;