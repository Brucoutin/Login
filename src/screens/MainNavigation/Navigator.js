import React from 'react';
import LoginScreen from '../LoginScreen/LoginScreen';
import Welcome from '../Welcome/Welcome';
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
    </Navigator>
  );

}