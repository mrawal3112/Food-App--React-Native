import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './screens/Home';
import DisplayPage from './navigation/DisplayPage';
import Recipe from './screens/Recipe';
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen component={Home} name='HomePage' />
        <Stack.Screen component={DisplayPage} name='DisplayPage' />
        <Stack.Screen component={Recipe} name='Recipe' />
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

export default App;