import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import logo from './name-logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <h1>Home Grown</h1>
      <h2>Grow. Nourish. Sell</h2>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
