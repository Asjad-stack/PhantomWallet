import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import PoppinsText from './PoppinsText';

const PinSetupBottomSheet = ({
  visible,
  onClose,
  onPinCreated,
}) => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState('create');
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').height));
  const pinInputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();
      
      // Focus the input after animation completes
      setTimeout(() => {
        pinInputRef.current?.focus();
      }, 500);
    } else {
      Animated.timing(slideAnim, {
        toValue: Dimensions.get('window').height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const handlePinSubmit = () => {
    if (pin.length !== 6) {
      Alert.alert('Error', 'PIN must be 6 digits');
      return;
    }

    if (step === 'create') {
      setStep('confirm');
      setConfirmPin('');
      // Focus the input for the confirm step
      setTimeout(() => {
        pinInputRef.current?.focus();
      }, 100);
    } else {
      if (pin !== confirmPin) {
        Alert.alert('Error', 'PINs do not match. Please try again.');
        setConfirmPin('');
        return;
      }
      onPinCreated(pin);
      resetForm();
    }
  };

  const resetForm = () => {
    setPin('');
    setConfirmPin('');
    setStep('create');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const renderPinInput = (value, onChangeText, placeholder) => (
    <View style={styles.pinContainer}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <View
          key={index}
          style={[styles.pinDot, value.length > index && styles.pinDotFilled]}
        />
      ))}
      <TextInput
        ref={pinInputRef}
        style={styles.pinInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#666"
        keyboardType="numeric"
        maxLength={6}
        secureTextEntry
        autoFocus
        showSoftInputOnFocus={true}
        returnKeyType="done"
        onSubmitEditing={handlePinSubmit}
      />
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={handleClose} />
        <Animated.View
          style={[styles.bottomSheet, { transform: [{ translateY: slideAnim }] }]}
        >
          <View style={styles.handle} />

          <View style={styles.header}>
            <PoppinsText size="xl" weight="bold" style={styles.title}>
              {step === 'create' ? 'Create PIN Code' : 'Confirm PIN Code'}
            </PoppinsText>
            <PoppinsText size="sm" weight="regular" style={styles.subtitle}>
              {step === 'create'
                ? 'Create a 6-digit PIN to secure your wallet'
                : 'Re-enter your PIN to confirm'}
            </PoppinsText>
          </View>

          <View style={styles.inputSection}>
            {step === 'create'
              ? renderPinInput(pin, setPin, 'Enter 6-digit PIN')
<<<<<<< Updated upstream:src/components/PinSetupBottomSheet.tsx
              : renderPinInput(confirmPin, setConfirmPin, 'Confirm 6-digit PIN')
            }
            <PoppinsText size="xs" weight="regular" style={styles.inputHint}>
              Tap on the dots to enter your PIN
            </PoppinsText>
=======
              : renderPinInput(confirmPin, setConfirmPin, 'Confirm 6-digit PIN')}
>>>>>>> Stashed changes:src/components/PinSetupBottomSheet.js
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <PoppinsText size="md" weight="medium" style={styles.cancelButtonText}>
                Cancel
              </PoppinsText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.confirmButton,
                ((step === 'create' && pin.length !== 6) ||
                  (step === 'confirm' && confirmPin.length !== 6)) &&
                  styles.confirmButtonDisabled,
              ]}
              onPress={handlePinSubmit}
              disabled={
                (step === 'create' && pin.length !== 6) ||
                (step === 'confirm' && confirmPin.length !== 6)
              }
            >
              <PoppinsText size="md" weight="semibold" style={styles.confirmButtonText}>
                {step === 'create' ? 'Continue' : 'Confirm'}
              </PoppinsText>
            </TouchableOpacity>
          </View>

          {step === 'confirm' && (
<<<<<<< Updated upstream:src/components/PinSetupBottomSheet.tsx
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => {
                setStep('create');
                // Focus the input when going back
                setTimeout(() => {
                  pinInputRef.current?.focus();
                }, 100);
              }}
            >
=======
            <TouchableOpacity style={styles.backButton} onPress={() => setStep('create')}>
>>>>>>> Stashed changes:src/components/PinSetupBottomSheet.js
              <PoppinsText size="sm" weight="medium" style={styles.backButtonText}>
                ← Back to create PIN
              </PoppinsText>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: '#1A1F2E',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#4A5568',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#A0AEC0',
    textAlign: 'center',
    lineHeight: 20,
  },
  inputSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  inputHint: {
    color: '#A0AEC0',
    textAlign: 'center',
    marginTop: 10,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 20,
    minHeight: 50,
  },
  pinDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4A5568',
    marginHorizontal: 8,
    backgroundColor: 'transparent',
  },
  pinDotFilled: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  pinInput: {
    position: 'absolute',
    width: '100%',
    height: 50,
    opacity: 0.01, // Very low opacity but still focusable
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    top: -10, // Position it slightly above the dots for better touch area
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4A5568',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#A0AEC0',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#4A5568',
  },
  confirmButtonText: {
    color: '#fff',
  },
  backButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#007AFF',
  },
});

export default PinSetupBottomSheet;


