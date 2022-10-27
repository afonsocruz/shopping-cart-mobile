import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Homepage, Checkout } from '../pages';
import { NavigationRoutesType } from '../types';

const Stack = createNativeStackNavigator();

const NavigationRoutes: React.FC<NavigationRoutesType> = ({ children }: NavigationRoutesType) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  )
}

export default NavigationRoutes;