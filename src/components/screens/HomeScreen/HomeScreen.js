import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../screenComponents/Header/Header';
import Bid from '../../screenComponents/Bid/Bid';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.titleContainer}>
                    <Text style={styles.bidTitle}>Enchères à venir</Text>
                    <Image source={require('../../../assets/images/bid.png')} style={styles.bidIcon} />
                </View>
                <View style={styles.line} />
                <Bid />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen