import React from 'react';
import LoginScreen from '../LoginScreen/LoginScreen';
import Welcome from '../Welcome/Welcome';
import Cadastro from '../Cadastro/Cadastro';
export function Navigator() {
  return (
    <Navigator>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }} />
         <Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }} />
         <Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }} />
    </Navigator>
  );

}