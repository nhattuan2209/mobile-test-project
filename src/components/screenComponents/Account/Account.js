import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

const Account = () => {
    return (
        <View style={styles.card}>
            <View style={styles.subContainer}>
                <Image source={require('../../../assets/images/progress.png')} style={styles.progress} />
                <View style={styles.subTextContainer}>
                    <Text style={styles.subFirstText}>75 % du profil est complété</Text>
                    <View>
                        <Text style={styles.subSecondText} numberOfLines={3} ellipsizeMode='tail'>Débloque une récompense en complétant </Text>
                        <Text style={styles.subSecondText}>ton profil à 100%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoCard}>
                <View style={styles.title}>
                    <View style={styles.titleLeft}>
                        <Image source={require('../../../assets/images/info.png')} style={styles.infoImg} />
                        <Text style={styles.titleInfo}>Informations personnelles</Text>
                    </View>
                    <Image source={require('../../../assets/images/yes.png')} style={styles.yesImg} />
                </View>
                <View style={styles.section1}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avaText}>Avatar ou Photo</Text>
                        <Image source={require('../../../assets/images/pen.png')} style={styles.penImg} />
                        <Image source={require('../../../assets/images/avatar.png')} style={styles.avatar} />
                    </View>
                    <View wstyle={styles.inputNameSection}>
                        <View>
                            <Text style={styles.inputTitle}>Nom</Text>
                            <View style={styles.nameSection}>
                                <Image source={require('../../../assets/images/user-black.png')} style={styles.userIcon} />
                                <TextInput
                                    placeholder='Nom ou Username'
                                    style={styles.inputName}
                                />
                                <Image source={require('../../../assets/images/pencil.png')} style={styles.pen} />
                            </View>
                        </View>
                        <View >
                            <Text style={styles.inputTitle}>Inscription</Text>
                            <View style={styles.nameSection}>
                                <Image source={require('../../../assets/images/calendar-account.png')} style={styles.userIcon} />
                                <TextInput
                                    placeholder='Date d’inscription'
                                    style={styles.inputName}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Adresse mail</Text>
                    <View style={styles.nameSection}>
                        <Image source={require('../../../assets/images/mail-account.png')} style={styles.mail} />
                        <TextInput
                            placeholder='Adresse@mail.com'
                            style={styles.inputEmail}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Mot de passe</Text>
                    <View style={styles.nameSection}>
                        <Image source={require('../../../assets/images/key-account.png')} style={styles.mail} />
                        <TextInput
                            placeholder='**********'
                            style={styles.inputEmail}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
            </View>
            <View style={styles.infoCard}>
                <View style={styles.title}>
                    <View style={styles.titleLeft}>
                        <Image source={require('../../../assets/images/map.png')} style={styles.infoImg} />
                        <Text style={styles.titleInfo}>Adresse de livraison</Text>
                    </View>
                    <Image source={require('../../../assets/images/yes.png')} style={styles.yesImg} />
                </View>
                <View>
                    <Text style={styles.inputTitle}>Rue</Text>
                    <View style={styles.nameSection}>
                        <Image source={require('../../../assets/images/map-pin.png')} style={styles.mapPin} />
                        <TextInput
                            placeholder='Rue'
                            style={styles.inputEmail}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Numéro</Text>
                    <View style={styles.nameSection}>
                        <Image source={require('../../../assets/images/map-pin.png')} style={styles.mapPin} />
                        <TextInput
                            placeholder='Numéro'
                            style={styles.inputEmail}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
                <View style={styles.addressContainer}>
                    <View style={styles.address}>
                        <Text style={styles.inputTitle}>Ville</Text>
                        <View style={styles.villageSection}>
                            <Image source={require('../../../assets/images/map-pin.png')} style={styles.mapVillage} />
                            <TextInput
                                placeholder='Ville'
                                style={styles.inputVillage}
                            />
                            <Image source={require('../../../assets/images/pencil.png')} style={styles.penPostal} />
                        </View>
                    </View>
                    <View style={styles.address}>
                        <Text style={styles.inputTitle}>Ville</Text>
                        <View style={styles.villageSection}>
                            <Image source={require('../../../assets/images/map-pin.png')} style={styles.mapVillage} />
                            <TextInput
                                placeholder='Ville'
                                style={styles.inputVillage}
                            />
                            <Image source={require('../../../assets/images/pencil.png')} style={styles.penPostal} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Pays</Text>
                    <View style={styles.nameSection}>
                        <Image source={require('../../../assets/images/flag.png')} style={styles.flag} />
                        <TextInput
                            placeholder='France'
                            style={styles.inputEmail}
                        />
                        <Image source={require('../../../assets/images/arrow-down.png')} style={styles.arrowDown} />
                    </View>
                </View>
            </View>
            <View style={styles.infoCard}>
                <View style={styles.title}>
                    <View style={styles.titleLeft}>
                        <Image source={require('../../../assets/images/credit-card.png')} style={styles.infoImg} />
                        <Text style={styles.titleInfo}>Paiement</Text>
                    </View>
                    <Image source={require('../../../assets/images/exclamation.png')} style={styles.yesImg} />
                </View>
                <View>
                    <Text style={styles.inputTitlePay}>Nom du titulaire</Text>
                    <View style={styles.nameSection}>
                        <TextInput
                            placeholder='Nom du titulaire'
                            style={styles.inputPay}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitlePay}>Numéro de carte</Text>
                    <View style={styles.nameSection}>
                        <TextInput
                            placeholder='Numéro de carte'
                            style={styles.inputPay}
                        />
                        <Image source={require('../../../assets/images/pencil.png')} style={styles.penMail} />
                    </View>
                </View>
                <View style={styles.addressContainer}>
                    <View style={styles.address}>
                        <Text style={styles.inputTitlePay}>Date d’expiration</Text>
                        <View style={styles.villageSection}>
                            <TextInput
                                placeholder='Exp.'
                                style={styles.inputPaySmall}
                            />
                            <Image source={require('../../../assets/images/pencil.png')} style={styles.penPostal} />
                        </View>
                    </View>
                    <View style={styles.address}>
                        <Text style={styles.inputTitlePay}>CCV</Text>
                        <View style={styles.villageSection}>
                            <TextInput
                                placeholder='***'
                                style={styles.inputPaySmall}
                            />
                            <Image source={require('../../../assets/images/pencil.png')} style={styles.penPostal} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.buttonGreen}>
                <Image source={require('../../../assets/images/reload.png')}/>
                <Text style={styles.buttonGreenText}>Mettre à jour</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.buttonBlue}>
                <Image source={require('../../../assets/images/exit.png')}/>
                <Text style={styles.buttonGreenText}>Se déconnecter</Text>
            </View>
        </View>
    )
}

export default Account