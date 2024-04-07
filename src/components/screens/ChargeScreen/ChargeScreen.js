import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../screenComponents/Header/Header';
import Charge from '../../screenComponents/Charge/Charge';

const ChargeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.titleContainer}>
                    <Text style={styles.chargeTitle}>Recharge</Text>
                    <Image source={require('../../../assets/images/coconut-charge.png')} style={styles.chargeIcon} />
                </View>
                <View style={styles.line} />
                <Charge />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChargeScreen