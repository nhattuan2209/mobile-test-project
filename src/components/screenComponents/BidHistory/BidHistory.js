import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './style';
import { HistoryBid } from '../../../utils/data';

const BidHistory = () => {
    const borderColors = ['#56698F', '#4ABF40', '#C7577C', '#EDBD57'];

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.subTitleContainer}>
                <Image source={require('../../../assets/images/calendar.png')} style={styles.calendar} />
                <Text style={styles.subTitle}>Aujourd’hui</Text>
            </View>
            <View style={styles.cardsContainer}>
                {
                    HistoryBid.map((data, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row' }}>
                                <View style={[styles.cards, { borderColor: borderColors[index % borderColors.length] }]}>
                                    <View style={styles.winnerContainer}>
                                        <View style={styles.winnerBackground}>
                                            <Image source={data.avatar} style={styles.avatar} />
                                            <View style={styles.nameContainer}>
                                                <Text style={styles.name}>{data.winner}</Text>
                                                <Text style={styles.from}>{data.comeFrom}</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.winner}>Gagnant de l’enchère</Text>
                                    </View>
                                    <Image source={data.image} style={styles.itemImage} />
                                    <View style={styles.containerBottom}>
                                        <Text style={styles.itemName}>{data.name}</Text>

                                        <View style={styles.cardMid}>
                                            <Text style={styles.priceTitle}>Prix magasin</Text>
                                            <Text style={styles.price}>{data.price}</Text>
                                            <View style={styles.priceContainer}>
                                                <Text style={styles.priceCoconut}>{data.priceCoconut}</Text>
                                                <Image source={require('../../../assets/images/coconut-money.png')} style={styles.priceCoconutImage} />
                                            </View>
                                        </View>
                                        <View style={styles.cardMidParticipation}>
                                            <Text style={styles.priceTitleParticipation}>Participation</Text>
                                            <View style={styles.textParticipation}>
                                                <Text style={styles.priceCoconut}>{data.participation}</Text>
                                                <View style={[styles.dot, data.participation === 'Oui' ? styles.greenDot : styles.redDot]} />
                                            </View>
                                        </View>
                                        <View style={styles.cardTimeAndBid}>
                                            <View style={styles.cardMidTime}>
                                                <Image source={require('../../../assets/images/calendar-days.png')} style={styles.calendarTime} />
                                                <Text style={styles.priceTitleParticipation}>{data.timeToday}</Text>
                                            </View>
                                            <View style={styles.cardMidBid}>
                                                <Image source={require('../../../assets/images/bid-bold.png')} style={styles.bidBold} />
                                                <Text style={styles.bidNumber}>{data.bid}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.cardSell}>
                                            <Text style={styles.priceTitle}>Vendu à</Text>
                                            <View style={styles.sell}>
                                                <Text style={styles.sellPrice}>{data.sell}</Text>
                                                <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.bidBold} />
                                            </View>
                                        </View>
                                        <View style={styles.cardBottom}>
                                            <Text style={styles.priceText}>Récupérer</Text>
                                            <View style={styles.cardBottomRight}>
                                                <Text style={styles.numberUnblock}>{data.back}</Text>
                                                <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    )
                }
            </View>

            <View style={styles.subTitleContainer}>
                <Image source={require('../../../assets/images/calendar.png')} style={styles.calendar} />
                <Text style={styles.subTitle}>Hier</Text>
            </View>
            <View style={styles.cardsContainer}>
            {
                    HistoryBid.map((data, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row' }}>
                                <View style={[styles.cards, { borderColor: borderColors[index % borderColors.length] }]}>
                                    <View style={styles.winnerContainer}>
                                        <View style={styles.winnerBackground}>
                                            <Image source={data.avatar} style={styles.avatar} />
                                            <View style={styles.nameContainer}>
                                                <Text style={styles.name}>{data.winner}</Text>
                                                <Text style={styles.from}>{data.comeFrom}</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.winner}>Gagnant de l’enchère</Text>
                                    </View>
                                    <Image source={data.image} style={styles.itemImage} />
                                    <View style={styles.containerBottom}>
                                        <Text style={styles.itemName}>{data.name}</Text>

                                        <View style={styles.cardMid}>
                                            <Text style={styles.priceTitle}>Prix magasin</Text>
                                            <Text style={styles.price}>{data.price}</Text>
                                            <View style={styles.priceContainer}>
                                                <Text style={styles.priceCoconut}>{data.priceCoconut}</Text>
                                                <Image source={require('../../../assets/images/coconut-money.png')} style={styles.priceCoconutImage} />
                                            </View>
                                        </View>
                                        <View style={styles.cardMidParticipation}>
                                            <Text style={styles.priceTitleParticipation}>Participation</Text>
                                            <View style={styles.textParticipation}>
                                                <Text style={styles.priceCoconut}>{data.participation}</Text>
                                                <View style={[styles.dot, data.participation === 'Oui' ? styles.greenDot : styles.redDot]} />
                                            </View>
                                        </View>
                                        <View style={styles.cardTimeAndBid}>
                                            <View style={styles.cardMidTime}>
                                                <Image source={require('../../../assets/images/calendar-days.png')} style={styles.calendarTime} />
                                                <Text style={styles.priceTitleParticipation}>{data.timeToday}</Text>
                                            </View>
                                            <View style={styles.cardMidBid}>
                                                <Image source={require('../../../assets/images/bid-bold.png')} style={styles.bidBold} />
                                                <Text style={styles.bidNumber}>{data.bid}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.cardSell}>
                                            <Text style={styles.priceTitle}>Vendu à</Text>
                                            <View style={styles.sell}>
                                                <Text style={styles.sellPrice}>{data.sell}</Text>
                                                <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.bidBold} />
                                            </View>
                                        </View>
                                        <View style={styles.cardBottom}>
                                            <Text style={styles.priceText}>Récupérer</Text>
                                            <View style={styles.cardBottomRight}>
                                                <Text style={styles.numberUnblock}>{data.back}</Text>
                                                <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    )
                }
            </View>
        </ScrollView>

    )
}

export default BidHistory