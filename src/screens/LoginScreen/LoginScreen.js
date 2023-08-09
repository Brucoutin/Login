import React, { useState } from 'react';
import { View, Text, Image, TextInput,TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from "../Styles/LoginScreenStyle";
import { useNavigation } from '@react-navigation/native';
import woman from "../assets/png/woman.png";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import auth, { firebase } from "@react-native-firebase/auth"
const LoginScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  
  function handleEntrar (){
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then(()=> navigation.navigate("HomeScreen"))
    .catch(error => {
      Alert.alert("Email ou senha inválido!")
      console.error(error);
    });
    setEmail('')
    setSenha('')

  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: '3%', bottom: '5%' }}>
        <Image
          source={woman}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.textLogin}>
          Login
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCapitalize='none'
        />
        <TouchableOpacity style={styles.button} onPress={() => handleEntrar()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textOu}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.textOu}>ou</Text>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <AntDesign name="google" color="#fff" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFacebook}>
            <MaterialCommunityIcons name="facebook" color="#fff" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLinkedin}>
            <Entypo name="linkedin-with-circle" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
export default LoginScreen;
