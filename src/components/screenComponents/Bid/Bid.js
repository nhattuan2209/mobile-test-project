import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import { BidToday } from '../../../utils/data';

const Bid = () => {

    const borderColors = ['#56698F', '#4ABF40', '#C7577C', '#EDBD57'];
    const [showNumber, setShowNumber] = useState(true);

    const handlePress = () => {
        setShowNumber(!showNumber);
    };
    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={styles.subTitleContainer}>
                <Image source={require('../../../assets/images/calendar.png')} style={styles.calendar} />
                <Text style={styles.subTitle}>Aujourd’hui</Text>
            </View>
            <View style={styles.cardsContainer}>
                {
                    BidToday.map((data, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row' }}>
                                <View style={[styles.cards, { borderColor: borderColors[index % borderColors.length] }]}>
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
                                        <View style={styles.cardBottom}>
                                            <Text style={styles.priceText}>Débloquer</Text>
                                            <TouchableOpacity onPress={handlePress}>
                                                <View style={[styles.cardBottomRight, { width: showNumber ? 50 : 30 }]}>
                                                    {showNumber ? (
                                                        <>
                                                            <Text style={styles.numberUnblock}>{data.unblock}</Text>
                                                            <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                                        </>
                                                    ) : (
                                                        <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                                    )}
                                                </View>
                                            </TouchableOpacity>
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
                <Text style={styles.subTitle}>Dermain</Text>
            </View>
            <View style={styles.cardsContainer}>
                {
                    BidToday.map((data, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row' }}>
                                <View style={[styles.cards, { borderColor: borderColors[index % borderColors.length] }]}>
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
                                        <View style={styles.cardBottom}>
                                            <Text style={styles.priceText}>Débloquer</Text>
                                            <TouchableOpacity onPress={handlePress}>
                                                <View style={[styles.cardBottomRight, { width: showNumber ? 50 : 30 }]}>
                                                    {showNumber ? (
                                                        <>
                                                            <Text style={styles.numberUnblock}>{data.unblock}</Text>
                                                            <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                                        </>
                                                    ) : (
                                                        <Image source={require('../../../assets/images/coconut-bold.png')} style={styles.coconutIcon} />
                                                    )}
                                                </View>
                                            </TouchableOpacity>
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

export default Bid