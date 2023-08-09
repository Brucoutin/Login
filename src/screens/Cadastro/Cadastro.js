import React, { useId, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from "../Styles/CadastroStyle";
import { ServerContainer, useLinkBuilder, useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import enviar from "../assets/png/enviar.png";
import firestore from '@react-native-firebase/firestore';

function Cadastro() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [loading, setLoading] = useState(false);
    const [imagem, setImagem] = useState(null)
    const handlecadastro = () => {
        const cadastro = firestore().collection('users').add({
            id:'',
            nome,
            email,
            senha,
            photo: imagem ? imagem : ""
        })
        auth()
            .createUserWithEmailAndPassword(email, senha, nome,)
            .then(() => cadastro)
            .then(() => Alert.alert("Conta criada com sucesso!"))
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
                    onChangeText={(text) => setNome(text)}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize='none'
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => handlecadastro()}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cadastro;