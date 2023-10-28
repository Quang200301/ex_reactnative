import React from 'react'
import HomeScreen from '../ScreenPage/HomeScreen';
import cart from '../ScreenPage/cartReduxtoolkit';
import ProfileScreen from '../ScreenPage/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartProduct from '../ScreenPage/CartProduct';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

    const ButtonTab=()=>{
        return(
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={cart}
          options={{
            tabBarLabel: 'cart',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
      );
    };
    export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="buttontab" component={ButtonTab} />
                <Stack.Screen name="cartproduct" component={CartProduct} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}