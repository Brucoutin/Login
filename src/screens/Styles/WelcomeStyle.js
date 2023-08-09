import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },
    ViewText: {
        marginTop: '5%',
        top: '15%',
    },
    text: {
        fontSize: 40,
        color: "#fff",
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'Lobster-Regular',
    },
    ViewImage:{
        width:'80%', 
        height:'50%',
        marginTop:'5%', 
        top:'15%', 
        alignSelf:'center'
    },
    logo: {
        alignSelf: 'flex-start',
        marginTop: '5%',
        top: '5%',
        width: '90%',
        height: '60%',
        alignSelf: 'center'
    },
    btn:{
        backgroundColor:'#b4affe', 
        width:'60%', 
        height:'25%',
        borderRadius:20, 
        justifyContent:'center',
        marginTop:'15%',
        top:'25%',
        alignSelf:'center'
    },
    txtBtn:{
        color:"#fff", 
        fontSize:20, 
        textAlign:'center',
        fontWeight:'bold',
    }
})
export default styles;