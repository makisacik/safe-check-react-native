import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleAppleLogin = () => {
    // Navigation will be implemented later
    console.log('Apple login pressed');
    navigation.navigate('Home');
  };

  const handleGoogleLogin = () => {
    // Navigation will be implemented later
    console.log('Google login pressed');
    navigation.navigate('Home');
  };

  const handlePhoneLogin = () => {
    // Navigation will be implemented later
    console.log('Phone login pressed');
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header with icon and title */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.shieldIcon}>🛡️</Text>
          </View>
          <Text style={styles.appTitle}>SafeCheck</Text>
        </View>

        {/* Welcome text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to SafeCheck</Text>
          <Text style={styles.welcomeSubtitle}>
            Your safety network, always there for you.
          </Text>
        </View>

        {/* Login buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleAppleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Continue with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handlePhoneLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Log In with Phone</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10231c',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  shieldIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.015,
    flex: 1,
    textAlign: 'center',
    paddingRight: 48,
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  welcomeTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
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
  footerText: {
    color: '#8ecdb7',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 12,
    paddingTop: 4,
  },
  bottomSpacer: {
    height: 20,
    backgroundColor: '#10231c',
  },
});

export default LoginScreen;
