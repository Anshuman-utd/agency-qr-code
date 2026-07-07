import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StaffScanStackParamList } from '../../navigation/StaffTabs';

type NavigationProp = NativeStackNavigationProp<StaffScanStackParamList, 'Scanner'>;

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const isFocused = useIsFocused();

  // Reset scanned state when returning to the screen
  useEffect(() => {
    if (isFocused) {
      setScanned(false);
    }
  }, [isFocused]);

  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (scanned) return;
    setScanned(true);
    navigation.navigate('Result', { token: data });
  };

  if (!permission) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.infoText}>Loading camera permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.permissionText}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <CameraView
          style={StyleSheet.absoluteFill}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        >
          <View style={styles.overlay}>
            <Text style={styles.hintText}>Align the Agency QR code inside the frame</Text>
            <View style={styles.scanFrame} />
            <Text style={styles.helpText}>Only scans agency verification tags</Text>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  infoText: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '500',
  },
  permissionText: {
    fontSize: 16,
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  permissionButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  scanFrame: {
    width: 240,
    height: 240,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 16,
    backgroundColor: 'transparent',
    marginBottom: 24,
  },
  helpText: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
  },
});
