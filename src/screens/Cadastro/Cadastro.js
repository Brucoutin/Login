import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ServerContainer, useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import enviar from "../assets/png/enviar.png";

function Cadastro() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [loading, setLoading] = useState(false);

    const handlecadastro=()=>{
     auth()
     .createUserWithEmailAndPassword(email, senha, nome)
     .then(()=> Alert.alert("Conta criada com sucesso!"))
     .catch(error => {
       if (error.code === 'auth/email-already-in-use') {
         console.log('That email address is already in use!');
       }
       if (error.code === 'auth/invalid-email') {
         console.log('That email address is invalid!');
       }
       console.error(error);
     });
     setEmail('')
     setNome('')
     setSenha('')
    }
  
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: '3%', bottom: '5%' }}>
                <Image
                    source={enviar}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.textLogin}>
                    Cadastro
                </Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={(text)=> setNome(text)}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={(text)=> setSenha(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => handlecadastro()}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    logo: {
        marginTop: '5%',
        top: '5%',
       
    },
    form: {
        width: '100%',
        marginBottom: '4%',
        bottom: '5%',
        backgroundColor: '#fff',
        height: '75%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    textLogin: {
        fontSize: 45,
        color: '#b4affe',
        textAlign: 'center',
        top: '2%',
    },
    label: {
        marginTop: 20,
        marginBottom: 5,
        left: '5%',
        color: 'black'
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#f6f6f6'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#b4affe',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '90%',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

});


export default Cadastro;