import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef(null);
    const navigation = useNavigation();

    const handleNext = () => {
        if (currentPage < 2) {
            setCurrentPage(prevPage => prevPage + 1);
            scrollViewRef.current.scrollTo({ x: (currentPage + 1) * scrollViewWidth, animated: true });
        } else {
            navigation.navigate('CheckScreen');
        }
    };

    const handleBack = () => {
        setCurrentPage(prevPage => prevPage - 1);
        scrollViewRef.current.scrollTo({ x: (currentPage - 1) * scrollViewWidth, animated: true });
    };

    const scrollViewWidth = 375;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                onMomentumScrollEnd={(event) => {
                    const page = Math.round(event.nativeEvent.contentOffset.x / scrollViewWidth);
                    setCurrentPage(page);
                }}
            >
                {/* Slide 1 */}
                <View style={styles.slide}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../../assets/images/image-brand.png')} style={styles.logo} />
                        <View style={styles.brandText}>
                            <Text style={styles.text}>Bienvenue sur</Text>
                            <Image source={require('../../../assets/images/brand.png')} />
                        </View>
                    </View>
                    <Text style={styles.textMid}>L’app d’enchère la plus folle !</Text>
                </View>

                {/* Slide 2 */}
                <View style={styles.slide}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../../assets/images/pig.png')} style={styles.logo} />
                        <View style={styles.brandText}>
                            <Text style={styles.text}>Fais des économies </Text>
                            <Text style={styles.text}>avec nos super </Text>
                            <Text style={styles.text}>offres</Text>
                        </View>

                    </View>
                    <View style={styles.textSlide2}>
                        <Text style={styles.textMidSlide2}>Retrouve tes produits préférés et des</Text>
                        <Text style={styles.textMidSlide2}>exclusivités que ne trouveras nulle</Text>
                        <Text style={styles.textMidSlide2}>part ailleurs.</Text>
                    </View>
                </View>

                {/* Slide 3 */}
                <View style={styles.slide}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../../assets/images/hammer.png')} style={styles.logo} />
                        <View style={styles.brandText}>
                            <Text style={styles.text}>Participe à des</Text>
                            <Text style={styles.text}>enchères de folie</Text>
                        </View>

                    </View>
                    <View style={styles.textSlide2}>
                        <Text style={styles.textMidSlide2}>Tiens-toi prêt à miser n’importe où,</Text>
                        <Text style={styles.textMidSlide2}>n’importe quand avec des enchères à</Text>
                        <Text style={styles.textMidSlide2}>durée ultra-limitée.</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom navigation */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleBack} disabled={currentPage === 0}>
                    <Image source={require('../../../assets/images/back-arrow.png')} style={styles.backButton} />
                </TouchableOpacity>
                <View style={styles.nav}>
                    {[...Array(5)].map((_, index) => (
                        <View key={index} style={[styles.dot, index === currentPage && { backgroundColor: 'white' }]} />
                    ))}
                </View>
                <TouchableOpacity onPress={handleNext} disabled={currentPage === 4} style={styles.nextButton}>
                    <Image source={require('../../../assets/images/next-arrow.png')} style={styles.nextButtonImg} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
