import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                options={{
                    headerShown: false,
                }}
                component={Login}
            />
        </Stack.Navigator>
    )
}

export default Router