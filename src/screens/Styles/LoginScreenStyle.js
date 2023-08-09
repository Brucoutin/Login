import { StyleSheet } from 'react-native';
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
      bottom: '1%',
      backgroundColor: '#fff',
      height: '67%',
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
    textOu: {
      color: 'black',
      fontWeight: 'bold',
      marginTop: '5%',
      fontSize: 17,
      textAlign: 'center'
    },
    viewButtons: {
      top: '5%',
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
  export default styles;