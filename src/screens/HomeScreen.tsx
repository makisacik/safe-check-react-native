import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCheckIn = () => {
    console.log('Check In pressed');
  };

  const handleLocationSharing = () => {
    console.log('Location Sharing pressed');
  };

  const handleSettings = () => {
    console.log('Settings pressed');
  };

  const handleContacts = () => {
    console.log('Contacts pressed');
    navigation.navigate('Contacts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>SafeCheck</Text>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={handleSettings}
            activeOpacity={0.8}
          >
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>Hi, Liam</Text>

        {/* Status Card */}
        <View style={styles.statusCardContainer}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOJjgmmSniN6xiSSA_6po4Jhu3SWwRPPm6tCrJ2dDFA1XTwPnUFCv1JvjdVPeTWEkawyU448aK1T22Den-xQQH61xl_ItKAJgu_0gyPakbJveCYmYhGWLCZ4pokA3V4jLSa8p6DNR0ByD5x8UNcsluu2s03-OOjWZGO8P6cGKux1XdtlWMF0aW1v37f355b8iHpDykYszfXFk56KRNoGmVu2PfYn8NpLxYDyQQqgXYUraCqdybCsWQMRtKXNxcDRlXJMEuDsl05bwA',
            }}
            style={styles.statusCard}
            imageStyle={styles.statusCardImage}
          >
            <View style={styles.statusCardContent}>
              <View style={styles.statusTextContainer}>
                <Text style={styles.statusTitle}>Safe</Text>
                <Text style={styles.statusSubtitle}>
                  Your location is not being shared
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity
            style={styles.primaryActionButton}
            onPress={handleCheckIn}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryActionButtonText}>Check In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryActionButton}
            onPress={handleLocationSharing}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryActionButtonText}>
              Location Sharing
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>

        {/* Activity Item 1 */}
        <View style={styles.activityItem}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsEH3YWHNDKzDClJ95QYfbeD3EKLiGpy3Zrh0bG61G-lc0Cf_9ZSJqJGkbOiIbl87rM8glItY8H8eXnur6kT6bc9fns3xm0CGskicswN1WkuegY1t_DPG-4SZZF2wuFCNmuKMKr3vVGJnZaXSc-KUzaP7Lz_boDBwImYhpejOPvBelzD905fso7PxoKqSpIWkBN_jsJFl_di9a41JhknHwzNVHT-o2BuXys8DZMeBdA8mmx5s1p3kL6l_n932_S5G00XLh43ddAQH4',
            }}
            style={styles.activityAvatar}
            imageStyle={styles.activityAvatarImage}
          />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Check-in requested by Mom</Text>
            <Text style={styles.activityTime}>2 hours ago</Text>
          </View>
        </View>

        {/* Activity Item 2 */}
        <View style={styles.activityItem}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBphItwbZRYp6KKbT9WoB_66sk0dlt8gltH41K4ZX6CYlKIq3FilViTY8DboJGEuuZkyePBqFHN7EsToEHbKT4m6paBtCKZTyskqqjAB2ZLVQ2GTjCIoahzpPmp2MAalyoARvG0xvdRFzOEP6g31z-awDMNGdjWNR4yg6YZGuO_97MK-qzocuksjqxkUZ_6f2xNiCfk7TYW6zTDiFW9pT-gytxG2E0DRh7Zd4RUNL61IuIC_L1nuj-TtJO3vfN1Sv21NsajrZtiRsO2',
            }}
            style={styles.activityAvatar}
            imageStyle={styles.activityAvatarImage}
          />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Location shared with Dad</Text>
            <Text style={styles.activityTime}>Yesterday, 10:00 AM</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <View style={styles.bottomNavContent}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {}}
            activeOpacity={0.8}
          >
            <Text style={styles.navIconActive}>🏠</Text>
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={handleContacts}
            activeOpacity={0.8}
          >
            <Text style={styles.navIcon}>👥</Text>
            <Text style={styles.navText}>Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={handleSettings}
            activeOpacity={0.8}
          >
            <Text style={styles.navIcon}>⚙️</Text>
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#10231c',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 8,
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.015,
    flex: 1,
    textAlign: 'center',
    paddingLeft: 48,
  },
  settingsButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  greeting: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 20,
  },
  statusCardContainer: {
    paddingHorizontal: 16,
  },
  statusCard: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  statusCardImage: {
    borderRadius: 12,
  },
  statusCardContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  statusTextContainer: {
    maxWidth: 440,
  },
  statusTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  statusSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.015,
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    justifyContent: 'space-between',
  },
  primaryActionButton: {
    backgroundColor: '#019863',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  primaryActionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.015,
  },
  secondaryActionButton: {
    backgroundColor: '#214a3c',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  secondaryActionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.015,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#10231c',
    paddingHorizontal: 16,
    minHeight: 72,
    paddingVertical: 8,
  },
  activityAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  activityAvatarImage: {
    borderRadius: 28,
  },
  activityContent: {
    flex: 1,
    justifyContent: 'center',
  },
  activityTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  activityTime: {
    color: '#8ecdb7',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  bottomNavigation: {
    borderTopWidth: 1,
    borderTopColor: '#214a3c',
    backgroundColor: '#17352b',
  },
  bottomNavContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
    gap: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
  },
  navIcon: {
    fontSize: 24,
    color: '#8ecdb7',
    height: 32,
    textAlignVertical: 'center',
  },
  navIconActive: {
    fontSize: 24,
    color: '#ffffff',
    height: 32,
    textAlignVertical: 'center',
  },
  navText: {
    color: '#8ecdb7',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.015,
  },
  navTextActive: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.015,
  },
  bottomSpacer: {
    height: 20,
    backgroundColor: '#17352b',
  },
});

export default HomeScreen;
