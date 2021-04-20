import 'react-native-gesture-handler'; /* Don't skip this step, or app may crash in production */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { Restaurant, OrderDelivery } from './src/screens'
import Tabs from './src/navigation/tabs';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Home" >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
