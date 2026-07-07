import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import GenerateBatchScreen from '../screens/admin/GenerateBatchScreen';
import IssuanceListScreen from '../screens/admin/IssuanceListScreen';
import ProfileScreen from '../screens/common/ProfileScreen';
import ScannerScreen from '../screens/staff/ScannerScreen';
import ResultScreen from '../screens/staff/ResultScreen';

export type AdminTabParamList = {
  HomeTab: undefined;
  ScanTab: undefined;
  GenerateTab: undefined;
  IssuancesTab: undefined;
  ProfileTab: undefined;
};

export type AdminScanStackParamList = {
  Scanner: undefined;
  Result: { token: string };
};

const Tab = createBottomTabNavigator<AdminTabParamList>();
const Stack = createNativeStackNavigator<AdminScanStackParamList>();

function AdminScanStackNavigator() {
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

export default function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'cube';
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ScanTab') {
            iconName = 'qr-code';
          } else if (route.name === 'GenerateTab') {
            iconName = 'add-circle';
          } else if (route.name === 'IssuancesTab') {
            iconName = 'list';
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
        component={AdminHomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Tab.Screen 
        name="ScanTab" 
        component={AdminScanStackNavigator} 
        options={{ title: 'Scan QR' }} 
      />
      <Tab.Screen 
        name="GenerateTab" 
        component={GenerateBatchScreen} 
        options={{ title: 'Generate' }} 
      />
      <Tab.Screen 
        name="IssuancesTab" 
        component={IssuanceListScreen} 
        options={{ title: 'Issuances' }} 
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
    </Tab.Navigator>
  );
}
