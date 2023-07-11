import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import woman from "../Assets/png/woman.png";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';


const LoginScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
 
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
          secureTextEntry={true}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Entrar</Text>
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
    top: '5%',
    backgroundColor: '#fff',
    height: '60%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  textLogin:{
    fontSize: 45,
    color: '#b4affe', 
    textAlign: 'center' 
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    left:'5%',
    color:'black'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    width: '90%',
    alignSelf: 'center',
    backgroundColor:'#f6f6f6'
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
  textOu:{
    color: 'black', 
    fontWeight: 'bold', 
    marginTop: '5%', 
    fontSize: 17, 
    textAlign: 'center' 
  },
  viewButtons: {
    top:'5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonGoogle: {
    width: 50,
    height: 50,
    backgroundColor: '#DB4A39',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFacebook: {
    width: 50,
    height: 50,
    backgroundColor: '#3B5998',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLinkedin: {
    width: 50,
    height: 50,
    backgroundColor: '#0E76A8',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default LoginScreen;
