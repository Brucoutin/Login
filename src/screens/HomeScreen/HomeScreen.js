import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import styles from '../Styles/HomeScreenStyle';
import { useNavigation } from '@react-navigation/native';
import auth, { firebase } from "@react-native-firebase/auth"
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  let fullname = '';
  let emailuser = '';
  let photoUser = '';
  const user = firebase.auth().currentUser;
  user.providerData.forEach((userInfo) => {
    fullname = user.displayName,
      emailuser = user.email,
      photoUser = user.photoURL
    console.log(user, userInfo)
  });
   
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View>
          <TouchableOpacity>
            <Image source={{ uri: "https://avatars.githubusercontent.com/u/97321917?v=4" }} style={styles.userPhoto} />
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{fullname}</Text>
          <Text style={styles.userFollowers}>{emailuser}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsCard}>
        <TouchableOpacity>
          <FontAwesome name="camera" color="pink" size={25} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};


export default HomeScreen;