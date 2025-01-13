import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import ProductDashboard from '../screens/dashboard/ProductDashboard';
import ProductCategories from '../screens/category/ProductCategories';
import ViewCart from '../screens/cart/ViewCart';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="ProductDashboard" component={ProductDashboard} />
        <Stack.Screen name="ProductCategories" component={ProductCategories} />
        <Stack.Screen name="ViewCart" component={ViewCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
