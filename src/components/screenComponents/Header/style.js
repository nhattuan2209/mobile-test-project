import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        height: 64,
        padding: 12,
        marginBottom: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    headerInnerColRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    headerColRight: {
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center',
        gap: 8
    },
    logoStyle: {
        width: 189,
        height: 32
    },
    number: {
        color: '#C7577C',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },
    user: {
        width: 24,
        height: 24
    },
    coconut: {
        width: 24,
        height: 24
    },
    userContainer: {
        justifyContent: 'center',
    },
    separationContainer: {
        justifyContent: 'center'
    },
    progressBar1: {
        width: 50, 
        height: 4, 
        backgroundColor: '#4ABF40', 
        borderRadius: 10
    },
    progressBar: {
        width: 50, 
        height: 4, 
        backgroundColor: '#56698F', 
        borderRadius: 10
    },
    progresBarContainer:{
        justifyContent: 'space-between', 
        flexDirection: 'row',
        gap: 4
    }
});

export default styles;