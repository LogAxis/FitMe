import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from './RootNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Step Counter and Profile Button */}
      <View style={styles.header}>
        <Text style={styles.stepCounter}>Steps: 10,000</Text>
        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Activity Graph */}
      <View style={styles.activityGraph}>
        <Text>Activity Graph Placeholder</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Videos')}
        >
          <Text style={styles.navButtonText}>Videos</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Tailor')}
        >
          <Text style={styles.navButtonText}>Tailor</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Analytics')}
        >
          <Text style={styles.navButtonText}>Analytics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Added margin to separate header from the activity graph
  },
  stepCounter: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  activityGraph: {
    height: 270,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Added margin to separate activity graph from navigation buttons

  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#000',
    fontSize: 16,
  },
  divider: {
    width: 1,
    backgroundColor: '#000',
    marginVertical: 5,
  },
});

export default HomeScreen;
