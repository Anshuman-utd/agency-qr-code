import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StaffScanStackParamList } from '../../navigation/StaffTabs';
import { verifyTokenApi, VerifyResponse } from '../../services/verify';
import { Ionicons } from '@expo/vector-icons';

type RouteProps = RouteProp<StaffScanStackParamList, 'Result'>;
type NavigationProp = NativeStackNavigationProp<StaffScanStackParamList, 'Result'>;

export default function ResultScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProp>();
  const { token } = route.params;

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<VerifyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function verifyQR() {
      try {
        setLoading(true);
        const data = await verifyTokenApi(token);
        setResult(data);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || 'Failed to verify QR. Check backend connection.');
      } finally {
        setLoading(false);
      }
    }

    verifyQR();
  }, [token]);

  const handleScanAgain = () => {
    navigation.navigate('Scanner');
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0F172A" />
        <Text style={styles.loadingText}>Verifying with backend...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.resultCard}>
          <Ionicons name="alert-circle" size={80} color="#EF4444" style={styles.icon} />
          <Text style={styles.statusTitleError}>Verification Error</Text>
          <Text style={styles.messageText}>{error}</Text>
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={handleScanAgain}>
          <Text style={styles.actionButtonText}>Scan Another Code</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const isValid = result?.valid === true;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultCard}>
        {isValid ? (
          <>
            <Ionicons name="checkmark-circle" size={84} color="#10B981" style={styles.icon} />
            <Text style={styles.statusTitleSuccess}>Valid Verification</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Issuing Agency</Text>
              <Text style={styles.value}>{result?.agencyName}</Text>

              <Text style={styles.label}>Status</Text>
              <Text style={[styles.value, { color: '#10B981' }]}>{result?.status}</Text>

              {result?.labelText && (
                <>
                  <Text style={styles.label}>Label Description</Text>
                  <Text style={styles.value}>{result?.labelText}</Text>
                </>
              )}

              {result?.issuedAt && (
                <>
                  <Text style={styles.label}>Issued At</Text>
                  <Text style={styles.value}>
                    {new Date(result.issuedAt).toLocaleString()}
                  </Text>
                </>
              )}

              <Text style={styles.label}>Token Identifier</Text>
              <Text style={styles.tokenText}>{token}</Text>
            </View>
          </>
        ) : (
          <>
            <Ionicons name="close-circle" size={84} color="#EF4444" style={styles.icon} />
            <Text style={styles.statusTitleError}>Invalid QR Code</Text>
            
            <View style={styles.divider} />

            <Text style={styles.messageText}>{result?.message || 'This token is not valid or is registered with another agency.'}</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Scanned Token</Text>
              <Text style={styles.tokenText}>{token}</Text>
            </View>
          </>
        )}
      </View>

      <TouchableOpacity 
        style={[styles.actionButton, { backgroundColor: isValid ? '#10B981' : '#0F172A' }]} 
        onPress={handleScanAgain}
      >
        <Ionicons name="scan-outline" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
        <Text style={styles.actionButtonText}>Scan Another Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
    justifyContent: 'space-between',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '100%',
  },
  icon: {
    marginBottom: 16,
  },
  statusTitleSuccess: {
    fontSize: 22,
    fontWeight: '800',
    color: '#10B981',
  },
  statusTitleError: {
    fontSize: 22,
    fontWeight: '800',
    color: '#EF4444',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    width: '100%',
    marginVertical: 18,
  },
  messageText: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  infoContainer: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '700',
    marginTop: 2,
  },
  tokenText: {
    fontSize: 11,
    color: '#64748B',
    backgroundColor: '#F1F5F9',
    padding: 6,
    borderRadius: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    marginTop: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 8,
    paddingVertical: 14,
    marginBottom: 20,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
