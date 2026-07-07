import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import { createBatchApi, QRIssuance } from '../../services/issuances';
import { Ionicons } from '@expo/vector-icons';

export default function GenerateBatchScreen() {
  const [count, setCount] = useState('10');
  const [labelText, setLabelText] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedTokens, setGeneratedTokens] = useState<QRIssuance[]>([]);

  const handleGenerate = async () => {
    const numCount = parseInt(count, 10);
    if (isNaN(numCount) || numCount <= 0) {
      Alert.alert('Validation Error', 'Please enter a valid count greater than 0.');
      return;
    }

    setLoading(true);
    try {
      const data = await createBatchApi(numCount, labelText.trim() || undefined);
      setGeneratedTokens(data);
      setLabelText('');
      Alert.alert('Success', `Successfully generated ${data.length} QR codes!`);
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.message || 'Failed to generate batch. Try again.';
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  };

  const handleClearResults = () => {
    setGeneratedTokens([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.title}>Generate Batch</Text>
          <Text style={styles.subtitle}>Issue new private verification QR codes</Text>
        </View>

        {generatedTokens.length === 0 ? (
          <View style={styles.formCard}>
            <Text style={styles.label}>Number of QR Codes to Generate</Text>
            <TextInput
              style={styles.input}
              value={count}
              onChangeText={setCount}
              keyboardType="number-pad"
              placeholder="e.g. 10"
            />
            <Text style={styles.hint}>Generate between 1 and 1000 codes per batch.</Text>

            <Text style={styles.label}>Batch Label / Metadata (Optional)</Text>
            <TextInput
              style={styles.input}
              value={labelText}
              onChangeText={setLabelText}
              placeholder="e.g. Batch #1 for North Depot"
              placeholderTextColor="#94A3B8"
            />
            <Text style={styles.hint}>Helpful metadata shown when scanning these codes.</Text>

            <TouchableOpacity style={styles.button} onPress={handleGenerate} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="sparkles" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
                  <Text style={styles.buttonText}>Generate Tokens</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultsCard}>
            <View style={styles.resultsHeader}>
              <Ionicons name="checkmark-circle" size={40} color="#10B981" />
              <View style={styles.resultsHeaderTitle}>
                <Text style={styles.successTitle}>Tokens Generated</Text>
                <Text style={styles.successSubtitle}>Total: {generatedTokens.length} codes</Text>
              </View>
            </View>

            <Text style={styles.resultsLabel}>Generated QR Tokens:</Text>
            <Text style={styles.warningText}>Copy these tokens or use the Web Admin Panel to export labels for printing.</Text>

            <View style={styles.listContainer}>
              {generatedTokens.map((item, index) => (
                <View key={item.id} style={styles.tokenRow}>
                  <Text style={styles.tokenNumber}>{index + 1}.</Text>
                  <Text style={styles.tokenText}>{item.token}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.doneButton} onPress={handleClearResults}>
              <Text style={styles.doneButtonText}>Generate Another Batch</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 24,
    flexGrow: 1,
  },
  header: {
    marginBottom: 24,
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
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  hint: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultsHeaderTitle: {
    marginLeft: 12,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  successSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  resultsLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 8,
    marginBottom: 4,
  },
  warningText: {
    fontSize: 12,
    color: '#B45309',
    backgroundColor: '#FEF3C7',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
    lineHeight: 16,
  },
  listContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
    maxHeight: 280,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tokenRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  tokenNumber: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    width: 28,
  },
  tokenText: {
    fontSize: 12,
    color: '#334155',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    flex: 1,
  },
  doneButton: {
    backgroundColor: '#0F172A',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
