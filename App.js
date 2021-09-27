import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from './components/LoginScreen';
import HomepageScreen from './components/Homepage';
import * as React from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign:'center',
          marginLeft:110
        },
      }}>
        <Stack.Screen name="Login" component={Loginscreen} options={{title: 'LoginPage'}}/>
        <Stack.Screen name="Homepage" component={HomepageScreen} options={{    headerLeft: ()=> null,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
