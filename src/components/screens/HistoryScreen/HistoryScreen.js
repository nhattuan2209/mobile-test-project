import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './style';
import BidHistory from '../../screenComponents/BidHistory/BidHistory';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../screenComponents/Header/Header';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
        <Header />
        <View style={styles.titleContainer}>
            <Text style={styles.bidTitle}>Historique des enchères</Text>
            <Image source={require('../../../assets/images/hourglass-history.png')} style={styles.hourglassIcon} />
        </View>
        <View style={styles.line} />
        <BidHistory />
    </ScrollView>
</SafeAreaView>
  )
}

export default HistoryScreen