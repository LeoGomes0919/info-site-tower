import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from '~/pages/Main';
import New from '~/components/New';
import Details from '~/components/Details';
import Edit from '~/components/Edit';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="New" component={New} />
        <AppStack.Screen name="Details" component={Details} />
        <AppStack.Screen name="Edit" component={Edit} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
