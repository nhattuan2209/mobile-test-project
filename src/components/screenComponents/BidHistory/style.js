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
        // padding: 10,
        gap: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    containerBottom: {
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
    priceTitle: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },
    price: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        // fontWeight: '700',
    },
    priceCoconut: {
        fontFamily: 'Montserrat-Bold',
        color: '#B1B6C2',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },
    priceCoconutImage: {
        width: 12,
        height: 12,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2,
    },
    cardMid: {
        padding: 8,
        gap: 2,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 162.5,
        height: 68,
        alignSelf: 'center',
    },

    cardMidParticipation: {
        paddingHorizontal: 8,
        gap: 2,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 162.5,
        height: 24,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    priceTitleParticipation: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },

    textParticipation: {
        flexDirection: 'row',
        gap: 4,
    },

    dot: {
        width: 6,
        height: 6,
        borderRadius: 100,
        alignSelf: 'center'
    },

    greenDot:{
        backgroundColor: '#33B454',
    },

    redDot:{
        backgroundColor: '#EE2F2F'
    },

    status: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        // fontWeight: '700',
    },

    priceCoconut: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 10,
        // fontWeight: '700',
    },

    cardTimeAndBid: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    cardMidTime: {
        padding: 8,
        gap: 8,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 84,
        height: 32,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardMidBid: {
        padding: 8,
        gap: 12,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 70,
        height: 32,
        alignSelf: 'center',
        flexDirection: 'row',
    },

    bidBold: {
        width: 16,
        height: 16,
    },

    bidNumber:{
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        // fontWeight: '700',
        fontSize: 10
    },

    calendarTime: {
        width: 16,
        height: 16,
    },

    cardSell:{
        padding: 8,
        gap: 2,
        backgroundColor: '#636D86',
        borderRadius: 6,
        width: 162.5,
        height: 56,
        alignSelf: 'center',
    },

    sell:{
        flexDirection: 'row',
        justifyContent: 'center',
        padding:4,
        gap: 2
    },

    sellPrice:{
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        // fontWeight: '700',
        fontSize: 12
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
        width: 57,
        height: 24,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    coconutIcon: {
        width: 16,
        height: 16,
    },
    numberUnblock: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        fontWeight: '700'

    },
    priceText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        // fontWeight: '700',
        padding: 6,
        color: 'black'
    },
    winnerContainer:{
        position: 'absolute',
        width: 178.5,
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    winnerBackground:{
        backgroundColor: '#1F2332',
        borderRadius: 30,
        height: 28,
        width: 162.5,
        zIndex: 2,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    avatar:{
        width: 24,
        height: 24
    },
    name:{
        fontSize: 10,
        // fontWeight: '700',
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF'
    },
    from:{
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        color: '#ABB7CE'
    },
    nameContainer:{
        padding: 5
    },
    winner:{
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        paddingVertical: 2
    }

});
export default styles;