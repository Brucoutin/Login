import React from "react";
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import styles from "../Styles/WelcomeStyle";
import { useNavigation } from '@react-navigation/native';
import woman from "../assets/png/woman.png";

function Welcome() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');

    return (
        <View style={styles.container}>
            <View style={styles.ViewText}>
                <Text style={styles.text}>
                   Bem-vindo!
                </Text>
            </View>
            <View style={styles.ViewImage}>
                <Image
                    source={woman}
                    style={[styles.logo, { height: height * 0.4 }]}
                    resizeMode="contain"
                />
            </View>

            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.txtBtn}>
                        Iniciar
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Welcome;