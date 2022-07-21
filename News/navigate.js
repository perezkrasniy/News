import React from 'react';
import Main from './components/Main';
import Contacts from './components/Contacts';
import FullInfo from './components/FullInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Main page'}}
            />
            <Stack.Screen 
                name='Contacts'
                component={Contacts}
                options={{title: 'My contacts'}}
            />
            <Stack.Screen 
                name='FullInfo'
                component={FullInfo}
                options={{title: 'Full Info'}}
            />
        </Stack.Navigator>
        </NavigationContainer>
}