import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import credentials from '../../../utils/credentials.json';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMailLogin = () => {
        if (username !== credentials.username) {
            Alert.alert('Mauvais e-mail', 'Veuillez vérifier à nouveau votre e-mail.');
        } else if (password !== credentials.password) {
            Alert.alert('Mot de passe incorrect', 'Veuillez vérifier à nouveau votre mot de passe.');
        } else {
            navigation.navigate('OnboardingScreen');
        }
    };

    const handleBackButton = () => {
        setShowLoginForm(false);
    };

    const renderLogin = () => {
        if (showLoginForm) {
            return (
                <View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.inputTitle}>Adresse mail</Text>
                        <View style={styles.nameSection}>
                            <Image source={require('../../../assets/images/mail-icon.png')} style={styles.mail} />
                            <TextInput
                                placeholder='Adresse@mail.com'
                                style={styles.inputEmail}
                                onChangeText={text => setUsername(text)}
                                value={username}
                            />
                        </View>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.inputTitle}>Mot de passe</Text>
                        <View style={styles.nameSection}>
                            <Image source={require('../../../assets/images/key-icon.png')} style={styles.mail} />
                            <TextInput
                                placeholder='Motdepasse'
                                style={styles.inputEmail}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={toggleShowPassword} style={styles.eye}>
                                <Image source={require('../../../assets/images/eye-slash.png')}  />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.handleLoginContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
                            <Image source={require('../../../assets/images/back-arrow.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton} onPress={handleMailLogin} >
                            <Text style={styles.loginText}>Créer mon compte</Text>
                            <Image source={require('../../../assets/images/next-arrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.google} onPress={() => setShowLoginForm(true)}>
                        <Image source={require('../../../assets/images/google.png')} />
                        <Text style={styles.googleText}>Connection avec Google</Text>
                    </TouchableOpacity>
                    <View>
                        <View style={styles.line} />
                    </View>
                    <TouchableOpacity style={styles.google} onPress={() => setShowLoginForm(true)}>
                        <Image source={require('../../../assets/images/mail-icon.png')} />
                        <Text style={styles.googleText}>Connection avec Mail</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/image-brand.png')} style={styles.logo} />
            <View style={styles.brandText}>
                <Text style={styles.text}>Créer un compte</Text>
                <Image source={require('../../../assets/images/brand.png')} />
            </View>
            {renderLogin()}
        </SafeAreaView>
    )
}

export default LoginScreen