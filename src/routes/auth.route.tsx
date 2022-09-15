import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAuth} from '@src/auth';
import {ScreenWrapper} from '@src/commons';
import {Login} from '@src/screens/login';

const AuthStack = createNativeStackNavigator();
const AuthRoute = () => {
  const {isLoggedIn} = useAuth();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isLoggedIn ? (
        <AuthStack.Screen name="AuthLogin">
          {(props) => (
            <ScreenWrapper>
              <Login {...props} />
            </ScreenWrapper>
          )}
        </AuthStack.Screen>
      ) : (
        <AuthStack.Screen
          name="AuthDrawer"
          component={() => <View>Logged In</View>}
        />
      )}
    </AuthStack.Navigator>
  );
};

export {AuthRoute};
