import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { extendTheme, NativeBaseProvider } from "native-base";

import { HomeScreen } from "./src/screens/Home";
import { SignInScreen } from "./src/screens/SignIn";

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F1F5F9",
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      600: "#2563E8",
    },
  },
});

const headerOptions: NativeStackNavigationOptions = {
  title: "learn react native",
  headerTintColor: "#2563E8",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            options={headerOptions}
            component={SignInScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
