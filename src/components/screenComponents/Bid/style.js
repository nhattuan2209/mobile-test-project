import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    subTitleContainer: {
        flexDirection: 'row',
        padding: 12,
        gap: 6
    },
    subTitle: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        // fontWeight: '700'
    },
    calendar: {
        width: 24,
        height: 24
    },
    cardsContainer: {
        // padding: 2,
        gap: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBottom:{
        gap: 8,
        backgroundColor: '#3C4868',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    cards: {
        borderRadius: 24,
        borderRadius: 24,
        borderColor: '#56698F',
        flexDirection: 'column',
        borderWidth: 4,
    },
    itemImage: {
        width: 178.5,
        height: 128,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    itemName: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        // fontWeight: '700',
        lineHeight: 16,
        padding: 4,
    },
    priceTitle:{
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },
    price:{
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        // fontWeight: '700',
    },
    priceCoconut:{
        fontFamily: 'Montserrat-Bold',
        color: '#B1B6C2',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },
    priceCoconutImage:{
        width: 12,
        height: 12,
    },
    priceContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        gap: 2,
    },
    cardMid:{
        padding: 8,
        gap: 2,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 162.5,
        height: 68,
        alignSelf: 'center',
    },
    cardBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 162.5,
        height: 32,
        padding: 4,
        alignSelf: 'center',
        marginBottom: 4
    },
    cardBottomRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#C7577C',
        // width: 50,
        height: 24,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    coconutIcon:{
        width: 16,
        height: 16,
    },
    numberUnblock:{
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        // fontWeight: '700'

    },
    priceText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        // fontWeight: '700',
        padding: 6,
        color: 'black'
    }
});
export default styles;