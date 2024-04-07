import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2332',
        padding: 32,
        gap: 64
    },
    slide:{
        // justifyContent: 'center',
        // alignItems: 'center'
        // padding: 24
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        padding: 8
    },
    logo: {
        width: 256,
        height: 256,
    },
    text: {
        fontSize: 32,
        fontFamily: 'AzoSans-Bold',
        color: 'white',
    },
    brandText: {
        padding: 15,
    },
    textMid: {
        fontSize: 16,
        fontFamily: 'AzoSans-Regular',
        color: 'white',
        marginLeft: 20,
        paddingTop: 12
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 12,
        gap: 20,
        flex: 2
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16
    },
    backButton: {
        width: 24,
        height: 24,
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: '#56698F',
        borderRadius: 100
    },
    nextButton: {
        backgroundColor: '#4ABF40',
        width: 56,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSlide2:{
        gap: 1,
    },
    textMidSlide2:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 20

    }
});
export default styles;