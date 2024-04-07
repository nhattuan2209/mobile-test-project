import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CheckScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const navigation = useNavigation();

    const handleCheck = () => {
        setIsChecked(!isChecked);
        setIsNextEnabled(!isNextEnabled); 
    };

    const handleNext = () => {
        navigation.navigate('Bottom');
    };

    const handleBack = () => {
        navigation.navigate('OnboardingScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/logo2.png')} style={styles.logo} />
            <View style={styles.policyContainer}>
                <View style={styles.policyButton}>
                    <Text style={styles.policyText}>Conditions Générales d’Utilisation</Text>
                </View>
                <View style={styles.policyButton}>
                    <Text style={styles.policyText}>Conditions Générales de Ventes</Text>
                </View>
                <View style={styles.policyButton}>
                    <Text style={styles.policyText}>Politique de Confidentialité</Text>
                </View>
            </View>
            <View style={styles.checkContainer}>
                <TouchableOpacity style={styles.check} onPress={handleCheck}>
                    {isChecked ? (
                        <Image source={require('../../../assets/images/green-check.png')} style={styles.checkboxImage} />
                    ) : (
                        <Image source={require('../../../assets/images/check.png')} style={styles.checkboxImage} />
                    )}
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={styles.textCheck}>J’accepte les conditions de</Text>
                    <Text style={styles.textCheck}>l’application</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.buttonBack} onPress={handleBack}>
                    <Image source={require('../../../assets/images/back-arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonNext, { backgroundColor: isNextEnabled ? '#4ABF40' : 'black' }]}
                    onPress={handleNext}
                    disabled={!isNextEnabled}
                >
                    <Text style={styles.nextText}>Je confirme</Text>
                    <Image source={require('../../../assets/images/next-arrow.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CheckScreen
