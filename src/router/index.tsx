import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import ProductPage from '../pages/Product';
import HomePage from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Login"
                options={{
                    headerShown: false,
                }}
                component={Login}
            /> */}
            <Stack.Screen
                name="ProductPage"
                options={{
                    headerShown: false,
                }}
                component={ProductPage}
            />
            <Stack.Screen
                name="ProductDetail"
                options={{
                    headerShown: false,
                }}
                component={ProductDetail}
            />
            {/* <Stack.Screen
                name="HomePage"
                options={{
                    headerShown: false,
                }}
                component={HomePage}
            /> */}
        </Stack.Navigator>
    )
}

export default Router