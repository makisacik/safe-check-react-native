import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigation will be implemented later
    console.log('Get Started pressed');
    navigation.navigate('Home');
  };

  const handleLogIn = () => {
    // Navigation will be implemented later
    console.log('Log In pressed');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Welcome text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>SafeCheck</Text>
          <Text style={styles.welcomeSubtitle}>
            Safety when you need it most
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleLogIn}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.bottomSpacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10231c',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  welcomeTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: -0.015,
    textAlign: 'center',
    paddingBottom: 12,
    paddingTop: 20,
  },
  welcomeSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    textAlign: 'center',
    paddingBottom: 12,
    paddingTop: 4,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    alignItems: 'stretch',
  },
  primaryButton: {
    backgroundColor: '#019863',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minWidth: 84,
    maxWidth: 480,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.015,
  },
  secondaryButton: {
    backgroundColor: '#214a3c',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minWidth: 84,
    maxWidth: 480,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.015,
  },
  footer: {
    paddingHorizontal: 16,
  },
  bottomSpacer: {
    height: 20,
    backgroundColor: '#10231c',
  },
});

export default WelcomeScreen;
