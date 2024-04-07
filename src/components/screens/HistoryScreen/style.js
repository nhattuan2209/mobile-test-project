import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2332'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
        gap: 6,
        height: 48,
    },
    bidTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: 'white',
        // fontWeight: '700',
        lineHeight: 24
    },
    hourglassIcon: {
        width: 24,
        height: 24,
    },
    line:{
        width: '95%',
        height: 2,
        backgroundColor: '#353946',
        alignSelf: 'center',
        borderRadius: 10,
        gap: 10
    }
});
export default styles;