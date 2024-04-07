import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <View style={styles.headerColLeft}>
                    <Image source={require('../../../assets/images/logo.png')} style={styles.logoStyle} />
                </View>
                <View style={styles.headerColRight}>
                    <View style={styles.headerInnerColRight}>
                        <Text style={styles.number}>43</Text>
                        <Image source={require('../../../assets/images/coconut-pink.png')} style={styles.coconut} />
                    </View>
                    <View style={styles.separationContainer}>
                        <Image source={require('../../../assets/images/separation.png')} />
                    </View>
                    <View style={styles.userContainer}>
                        <Image source={require('../../../assets/images/user-circle.png')} style={styles.user} />
                    </View>
                </View>
            </View>
            <View style={styles.progresBarContainer}>
                <View style={styles.progressBar1}/>
                <View style={styles.progressBar1}/>
                <View style={styles.progressBar}/>
                <View style={styles.progressBar}/>
                <View style={styles.progressBar}/>
                <View style={styles.progressBar}/>
                <View style={styles.progressBar}/>
            </View>
        </View>
    )
}

export default Header