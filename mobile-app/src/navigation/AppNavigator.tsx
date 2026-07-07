import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../store/authStore';
import AuthNavigator from './AuthNavigator';
import StaffTabs from './StaffTabs';
import AdminTabs from './AdminTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { token, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
        <ActivityIndicator size="large" color="#0F172A" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token === null ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : user?.role === 'ADMIN' ? (
          <Stack.Screen name="AdminApp" component={AdminTabs} />
        ) : (
          <Stack.Screen name="StaffApp" component={StaffTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
