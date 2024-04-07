import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';

const Charge = () => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <View style={styles.titleLeft}>
                    <Text style={styles.numberLeft}>43</Text>
                    <Image source={require('../../../assets/images/coconut-charge.png')} style={styles.coconutLeft} />
                </View>
                <View style={styles.titleRight}>
                    <Text style={styles.textRight}>Plus de QOQO’s ?</Text>
                    <Image source={require('../../../assets/images/coconut-black.png')} style={styles.coconutRight} />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardTop}>
                    <Image source={require('../../../assets/images/image-brand.png')} style={styles.imgBrand} />
                </View>
                <View style={styles.cardBottom}>
                    <View style={styles.cardBottomTitle}>
                        <Text style={styles.title}>Acheter des QOQO’s</Text>
                        <Text style={styles.description}>Plus tu achètes de QOQO's, plus tu en reçois en bonus !</Text>
                    </View>
                    <View style={styles.cardBottomPrice}>
                        <View style={styles.price}>
                            <Text style={styles.priceNumber}>2500</Text>
                            <Image source={require('../../../assets/images/coconut-charge.png')} style={styles.coconutCard} />
                        </View>
                        <View style={styles.bonus}>
                            <Text style={styles.bonusNumber}>+ 200</Text>
                            <Image source={require('../../../assets/images/coconut-money.png')} style={styles.coconutCardBottom} />
                        </View>
                    </View>
                    <View style={styles.cardBottomCharge}>
                        <View style={styles.leftCol}>
                            <Text style={styles.leftColText}>-5€</Text>
                        </View>
                        <View style={styles.centerCol}>
                            <Text style={styles.centerColText}>25</Text>
                            <Image source={require('../../../assets/images/euro-circle.png')} />
                        </View>
                        <View style={styles.rightCol}>
                            <Text style={styles.rightColText}>+5€</Text>
                        </View>
                    </View>
                    <View style={styles.bottomButton}>
                        <Text style={styles.buttonText}>Acheter</Text>
                        <Image source={require('../../../assets/images/banknotes.png')} style={styles.money}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Charge