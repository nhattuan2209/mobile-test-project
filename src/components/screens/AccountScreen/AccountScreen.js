import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../screenComponents/Header/Header';
import Account from '../../screenComponents/Account/Account';

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.navigationTop}>
          <Image source={require('../../../assets/images/arrow-left.png')}/>
          <Text style={styles.firstText}>Mon Compte  / </Text>
          <Text style={styles.secondText}>Mes informations</Text>
        </View>
        <Account />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen