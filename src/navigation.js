import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './page/start_page'
import TestPage from './page/test_page'


const Stack = createStackNavigator();

export default function MyStack () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartPage"
            component={StartPage}
            options = {{headerShown: false}}
            />
          <Stack.Screen
            name="TestPage"
            component={TestPage}
            options = {{headerShown: false}}
            />

        </Stack.Navigator>
    </NavigationContainer>
  );
};
