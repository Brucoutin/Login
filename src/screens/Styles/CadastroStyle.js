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

export default styles;