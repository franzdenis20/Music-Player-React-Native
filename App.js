import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import PantallaA from './PantallaA';
import PantallaB from './PantallaB';
import PantallaC from './PantallaC';
import PantallaF from './PantallaF';
import PantallaD from './PantallaD';
import PantallaE from './PantallaE';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaA">
        <Stack.Screen name="PantallaA" component={PantallaA} />
        <Stack.Screen name="PantallaB" component={PantallaB} />
        <Stack.Screen name="PantallaC" component={PantallaC} />
        <Stack.Screen name="PantallaD" component={PantallaD} />
        <Stack.Screen name="PantallaE" component={PantallaE} />
        <Stack.Screen name="PantallaF" component={PantallaF} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
