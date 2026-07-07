import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuth } from '../../store/authStore';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StaffTabParamList } from '../../navigation/StaffTabs';

type NavigationProp = NativeStackNavigationProp<StaffTabParamList, 'HomeTab'>;

export default function StaffHomeScreen() {
  const { user, agency } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const handleOpenScanner = () => {
    navigation.navigate('ScanTab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello,</Text>
        <Text style={styles.userName}>{user?.name}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{agency?.code}</Text>
        </View>
        <Text style={styles.agencyTitle}>Assigned Agency</Text>
        <Text style={styles.agencyName}>{agency?.name}</Text>
        <Text style={styles.agencyInfo}>You are authorized to scan and verify QR codes issued under this agency.</Text>
      </View>

      <View style={styles.scannerPrompt}>
        <Ionicons name="qr-code-outline" size={60} color="#64748B" style={{ marginBottom: 16 }} />
        <Text style={styles.promptTitle}>Verify Bottle QR</Text>
        <Text style={styles.promptDesc}>Scan the agency-issued QR label to verify the bottle's origin.</Text>

        <TouchableOpacity style={styles.scanButton} onPress={handleOpenScanner}>
          <Ionicons name="camera" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
          <Text style={styles.scanButtonText}>Open Scanner</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '500',
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  agencyTitle: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  agencyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  agencyInfo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 8,
    lineHeight: 18,
  },
  scannerPrompt: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  promptTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  promptDesc: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'center',
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
