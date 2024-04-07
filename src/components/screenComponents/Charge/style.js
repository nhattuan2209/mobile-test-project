import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 12,
        gap: 6
    },
    titleLeft: {
        width: 138,
        height: 56,
        backgroundColor: '#C7577C',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    titleRight: {
        width: 223,
        height: 56,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    coconutLeft: {
        width: 24,
        height: 24,
    },
    numberLeft: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        color: 'white'
    },
    textRight: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        color: 'black'
    },
    coconutRight: {
        width: 24,
        height: 24,
    },
    imgBrand: {
        width: 128,
        height: 128,
        alignSelf: 'center'
    },
    card: {
        padding: 12,
    },
    cardTop: {
        backgroundColor: '#3C4868',
        padding: 8,
        gap: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,

    },
    cardBottom:{
        backgroundColor: '#2F374B',
        padding: 16,
        gap: 16,
        borderBottomEndRadius: 24,
        borderBottomLeftRadius: 24
    },
    cardBottomTitle:{
        alignItems: 'center',
        gap: 4
    },
    title:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
    },
    description:{
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '400',
        padding: 8
    },
    cardBottomPrice:{
        backgroundColor: '#595F6F',
        borderRadius: 6,
        alignItems: 'center',
        height: 80,
        padding: 16,
    },
    price:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    bonus:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceNumber:{
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        color: 'white',

    },
    coconutCard:{
        width: 32,
        height: 32,
    },
    bonusNumber:{
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        color: '#ACAFB7'
    },
    coconutCardBottom:{
        width: 16,
        height: 16
    },
    cardBottomCharge:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftCol:{
        backgroundColor: 'white',
        width: 103.5,
        height: 56,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'

    },
    leftColText:{
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        color: 'black'
    },
    centerCol:{
        width: 103.5,
        height: 56,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8

    },
    centerColText:{
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
    },
    rightCol:{
        backgroundColor: 'white',
        width: 103.5,
        height: 56,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightColText:{
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        color: 'black'
    },
    bottomButton:{
        backgroundColor: '#4ABF40',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: 20
    },
    buttonText:{
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
    },
    money:{
        width: 24,
        height: 24
    }
});
export default styles;