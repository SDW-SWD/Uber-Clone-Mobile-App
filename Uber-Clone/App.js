import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Screens/MapScreen';

NativeWindStyleSheet.setOutput({
  default: 'native'
})

export default function App() {
  const Stack = createStackNavigator();


  return (
    <Provider store={store} >
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


