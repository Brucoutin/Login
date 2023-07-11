import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../LoginScreen/LoginScreen";
import Welcome from "../Welcome/Welcome";
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
        </Navigator>
    )
}
    