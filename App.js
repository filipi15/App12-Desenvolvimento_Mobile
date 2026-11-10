import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Formulario from './src/pages/Formulario';
import DadosInformados from './src/pages/DadosInformados';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">

        <Stack.Screen
        name="Formulario"
        component={Formulario}
        options={{
          title: 'Abertura de Conta',
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#FFF',
        }}
        />

        <Stack.Screen
        name="DadosInformados"
        component={DadosInformados}
        options={{
          title: 'Dados informados',
          headerStyle: {
            backgroundColor: '#4a7bd0'
          },
          headerTintColor: '#FFF',
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
