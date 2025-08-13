import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

interface ContactsScreenProps {
  navigation: any;
}

const ContactsScreen: React.FC<ContactsScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddContact = () => {
    console.log('Add Contact pressed');
  };

  const handleContactPress = (contactName: string) => {
    console.log(`${contactName} pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.8}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Trusted Contacts</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIconContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#8ecdb7"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {/* Contacts List */}
        <ScrollView style={styles.contactsList}>
          <Text style={styles.sectionTitle}>Trusted Contacts</Text>

          {/* Contact 1 */}
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleContactPress('Ethan Carter')}
            activeOpacity={0.8}
          >
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOBSPYZKpGNHlEsURyA2fsNtAI0JD1jQwpop2pXcxxFqOH3dqga2Qb0jrVGT_vgbUHFl94g7dvkhDyqKqrvTxuZTw-z-qZuxLImAlBIGtsEiIStvWUHzDH-ygZ9EO5ERr68FluO1GypUaTclHi4Z8k64vQ5GVi1JUGF0ZTyMuRWNYH3qR38bp2At4-nFS-jIn0VILaKrOoZFFjWdPTp3S-KShAFccPQkTx5IlaQ68GwUY_sYvoIcU1QJIPOZvkNMADhr0JFUgbhxhA',
              }}
              style={styles.contactAvatar}
              imageStyle={styles.contactAvatarImage}
            />
            <View style={styles.contactContent}>
              <Text style={styles.contactName}>Ethan Carter</Text>
              <Text style={styles.contactStatus}>
                Can request your location
              </Text>
            </View>
          </TouchableOpacity>

          {/* Contact 2 */}
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleContactPress('Sophia Bennett')}
            activeOpacity={0.8}
          >
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx7m1lc_UoaQEcRMcBkkp2UG7FDtp7FArlTTaIcDB-fitjDfDkgfthtNfS8esBOuS13d2__9DMJ26x2aZEDe1PvRcxpFJufl5kEpGqVZIyu7yVhu1fSzDytoMgz8L-4hZLEn4XKo0-3pe7yvZqA7aGhYXrzAQY5fLJvgaz5MhP2Lyq_rgvgHh29pm4M-xGSGT7C7gcMhpX_No3NDiD9YVEQj89QuL64nC0Y6gbApK7n54rsec6qwm0GI2-jA25Ue0lAB89j6PEw_K2',
              }}
              style={styles.contactAvatar}
              imageStyle={styles.contactAvatarImage}
            />
            <View style={styles.contactContent}>
              <Text style={styles.contactName}>Sophia Bennett</Text>
              <Text style={styles.contactStatus}>
                Can request your location
              </Text>
            </View>
          </TouchableOpacity>

          {/* Contact 3 */}
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleContactPress('Liam Harper')}
            activeOpacity={0.8}
          >
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3k2J4wg0Pm_5nAjJVkuzMrs-GQc6gPLQ9ri8eQ9hi80bpulqvDk_hYngIfvHIKhg53ZkaIka6WFMNZKt2IVT7idkJGoH8zwf-jJsOUC-Vz3BD68RTbgkOgS7uFwn94ils1h5Xg-rBd8dvZm_35N0JE8ugMj8zhYk9p-nPp-Siau-VYDPVDY_p-rCNkZVPFf9f_bs5iUHrNhE5Fnm1bl38g8THf8j069XbOAjw8Ntni8Dm9NW0jp7473YbpASdb3dqexvPtKMUa6C7',
              }}
              style={styles.contactAvatar}
              imageStyle={styles.contactAvatarImage}
            />
            <View style={styles.contactContent}>
              <Text style={styles.contactName}>Liam Harper</Text>
              <Text style={styles.contactStatus}>
                Can request your location
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Add Contact Button */}
      <View style={styles.bottomSection}>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddContact}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add Contact</Text>
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
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10231c',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 8,
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  backIcon: {
    fontSize: 24,
    color: '#ffffff',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.015,
    flex: 1,
    textAlign: 'center',
    paddingRight: 48,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#214a3c',
    borderRadius: 12,
    height: 48,
  },
  searchIconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  searchIcon: {
    fontSize: 20,
    color: '#8ecdb7',
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingLeft: 8,
  },
  contactsList: {
    flex: 1,
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#10231c',
    paddingHorizontal: 16,
    minHeight: 72,
    paddingVertical: 8,
  },
  contactAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  contactAvatarImage: {
    borderRadius: 28,
  },
  contactContent: {
    flex: 1,
    justifyContent: 'center',
  },
  contactName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  contactStatus: {
    color: '#8ecdb7',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  bottomSection: {
    backgroundColor: '#10231c',
  },
  addButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  addButton: {
    backgroundColor: '#019863',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.015,
  },
  bottomSpacer: {
    height: 20,
    backgroundColor: '#10231c',
  },
});

export default ContactsScreen;
