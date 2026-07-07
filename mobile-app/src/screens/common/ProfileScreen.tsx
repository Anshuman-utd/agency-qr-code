import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useAuth } from '../../store/authStore';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { user, agency, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: logout },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle" size={80} color="#0F172A" />
        </View>
        <Text style={styles.userName}>{user?.name}</Text>
        <Text style={styles.userRole}>{user?.role === 'ADMIN' ? 'Agency Administrator' : 'Verification Officer'}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user?.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Agency</Text>
          <Text style={styles.infoValue}>{agency?.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Agency Code</Text>
          <Text style={styles.infoValue}>{agency?.code}</Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Sign Out</Text>
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
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  userRole: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    fontWeight: '500',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '600',
  },
  actionContainer: {
    marginTop: 'auto',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    borderRadius: 8,
    paddingVertical: 14,
  },
  logoutText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '600',
  },
});
