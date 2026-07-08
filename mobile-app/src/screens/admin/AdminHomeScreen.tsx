import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useAuth } from '../../store/authStore';
import { getIssuancesApi } from '../../services/issuances';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AdminTabParamList } from '../../navigation/AdminTabs';

type NavigationProp = BottomTabNavigationProp<AdminTabParamList, 'ScanTab'>;

export default function AdminHomeScreen() {
  const { user, agency } = useAuth();
  const navigation = useNavigation<NavigationProp>();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active: 0, revoked: 0 });

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const data = await getIssuancesApi(1, 1);
        setStats({ 
          total: data.total, 
          active: data.activeCount, 
          revoked: data.revokedCount 
        });
      } catch (err) {
        console.error('Failed to load stats:', err);
      } finally {
        setLoading(false);
      }
    }
    if (isFocused) {
      loadStats();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Panel</Text>
        <Text style={styles.subtitle}>{agency?.name}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0F172A" style={{ marginTop: 40 }} />
      ) : (
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.total}</Text>
            <Text style={styles.statLabel}>Total QR Codes</Text>
          </View>
          <View style={[styles.statCard, { borderLeftWidth: 1, borderColor: '#E2E8F0' }]}>
            <Text style={[styles.statNumber, { color: '#10B981' }]}>{stats.active}</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={[styles.statCard, { borderLeftWidth: 1, borderColor: '#E2E8F0' }]}>
            <Text style={[styles.statNumber, { color: '#EF4444' }]}>{stats.revoked}</Text>
            <Text style={styles.statLabel}>Revoked</Text>
          </View>
        </View>
      )}

      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>Quick Actions</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ScanTab')}>
          <Ionicons name="qr-code" size={24} color="#0F172A" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuItemTitle}>Scan & Verify QR</Text>
            <Text style={styles.menuItemDesc}>Scan a bottle to verify if it belongs to your agency.</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('GenerateTab')}>
          <Ionicons name="add-circle" size={24} color="#0F172A" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuItemTitle}>Generate Batch</Text>
            <Text style={styles.menuItemDesc}>Generate new verification QR tokens for bottles.</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('IssuancesTab')}>
          <Ionicons name="list" size={24} color="#0F172A" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuItemTitle}>Manage Issuances</Text>
            <Text style={styles.menuItemDesc}>View and revoke generated QR tokens.</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
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
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    marginTop: 4,
  },
  menuSection: {
    paddingHorizontal: 24,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  menuItemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  menuItemDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});
