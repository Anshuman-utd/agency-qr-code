import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import { getIssuancesApi, revokeIssuanceApi, QRIssuance } from '../../services/issuances';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export default function IssuanceListScreen() {
  const [issuances, setIssuances] = useState<QRIssuance[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadIssuances = async (showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const data = await getIssuancesApi();
      setIssuances(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to retrieve QR issuances.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadIssuances(true);
    }
  }, [isFocused]);

  const handleRefresh = () => {
    setRefreshing(true);
    loadIssuances(false);
  };

  const handleRevoke = (item: QRIssuance) => {
    Alert.alert(
      'Confirm Revocation',
      `Are you sure you want to revoke token:\n${item.token}? This cannot be undone.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Revoke',
          style: 'destructive',
          onPress: async () => {
            try {
              await revokeIssuanceApi(item.id);
              setIssuances((prev) =>
                prev.map((x) => (x.id === item.id ? { ...x, status: 'REVOKED' } : x))
              );
              Alert.alert('Success', 'Token has been revoked.');
            } catch (err) {
              console.error(err);
              Alert.alert('Error', 'Failed to revoke token.');
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: QRIssuance }) => {
    const isActive = item.status === 'ACTIVE';

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.tokenText}>{item.token}</Text>
          <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeRevoked]}>
            <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextRevoked]}>
              {item.status}
            </Text>
          </View>
        </View>

        {item.labelText && (
          <Text style={styles.labelText}>
            Label: <Text style={{ fontWeight: '500', color: '#334155' }}>{item.labelText}</Text>
          </Text>
        )}

        <View style={styles.cardFooter}>
          <Text style={styles.dateText}>
            Issued: {new Date(item.issuedAt).toLocaleDateString()}
          </Text>
          
          {isActive && (
            <TouchableOpacity style={styles.revokeButton} onPress={() => handleRevoke(item)}>
              <Ionicons name="trash-outline" size={14} color="#EF4444" style={{ marginRight: 4 }} />
              <Text style={styles.revokeButtonText}>Revoke</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Issuances</Text>
        <Text style={styles.subtitle}>Manage and audit issued QR codes</Text>
      </View>

      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0F172A" />
        </View>
      ) : (
        <FlatList
          data={issuances}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="list-outline" size={48} color="#94A3B8" />
              <Text style={styles.emptyText}>No QR codes generated yet.</Text>
            </View>
          }
        />
      )}
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
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tokenText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F172A',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeActive: {
    backgroundColor: '#D1FAE5',
  },
  badgeRevoked: {
    backgroundColor: '#FEE2E2',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  badgeTextActive: {
    color: '#065F46',
  },
  badgeTextRevoked: {
    color: '#991B1B',
  },
  labelText: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  dateText: {
    fontSize: 12,
    color: '#94A3B8',
  },
  revokeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderColor: '#FEE2E2',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  revokeButtonText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 12,
    fontWeight: '500',
  },
});
