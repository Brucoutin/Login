import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../LoginScreen/LoginScreen";
import Welcome from "../Welcome/Welcome";
import Cadastro from "../Cadastro/Cadastro";
import HomeScreen from "../HomeScreen/HomeScreen";
const {Screen, Navigator} = createNativeStackNavigator();

export function MainNavigator(){

    return (
        <Navigator  screenOptions={{
          headerShown: false
        }}>
           <Screen
              name="Welcome"
              component={Welcome} 
              options={{headerShown:false}}      
            />
           <Screen
              name="LoginScreen"
              component={LoginScreen} 
              options={{headerShown:false}}      
            />
             <Screen
              name="HomeScreen"
              component={HomeScreen} 
              options={{headerShown:false}}      
            />
             <Screen
              name="Cadastro"
              component={Cadastro} 
              options={{headerShown:false}}      
            />
        </Navigator>
    )
}
    