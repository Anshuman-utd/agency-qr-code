import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import StaffHomeScreen from '../screens/staff/StaffHomeScreen';
import ScannerScreen from '../screens/staff/ScannerScreen';
import ResultScreen from '../screens/staff/ResultScreen';
import ProfileScreen from '../screens/common/ProfileScreen';

export type StaffTabParamList = {
  HomeTab: undefined;
  ScanTab: undefined;
  ProfileTab: undefined;
};

export type StaffScanStackParamList = {
  Scanner: undefined;
  Result: { token: string };
};

const Tab = createBottomTabNavigator<StaffTabParamList>();
const Stack = createNativeStackNavigator<StaffScanStackParamList>();

function ScanStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Scanner" 
        component={ScannerScreen} 
        options={{ headerTitle: 'Scan Agency QR' }} 
      />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen} 
        options={{ headerTitle: 'Verification Result', headerBackVisible: false }} 
      />
    </Stack.Navigator>
  );
}

export default function StaffTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'cube';
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ScanTab') {
            iconName = 'qr-code';
          } else if (route.name === 'ProfileTab') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0F172A',
        tabBarInactiveTintColor: '#94A3B8',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={StaffHomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Tab.Screen 
        name="ScanTab" 
        component={ScanStackNavigator} 
        options={{ title: 'Scan QR' }} 
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
    </Tab.Navigator>
  );
}
