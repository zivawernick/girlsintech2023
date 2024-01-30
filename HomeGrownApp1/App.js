import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import logo from './name-logo.png';

export default function App() {
    return (
    
    <View style={styles.container}>
      <h1>Home Grown</h1>
           <h2 style={styles.h2}>Grow. Nourish. Sell</h2>
            <StatusBar style="auto" />
            <button style ={styles.button}>Sign In</button>
            <br></br>
            <button style = {styles.button}>Sign Up</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontfamily: 'Arial',
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    h2: {
        fontFamily: 'Roboto', // Use a different font
        fontSize: 24, // Increase font size
        color: 'green',
    },

    button: {
        width: 200, // Set a specific width
        height: 50, // Set a specific height
        borderRadius: 3, // Add rounded corners
        border: 1,
        //border-color: #FFF,
        backgroundColor: '#57B84C', // Set background color
        color: '#fff', // Set text color
        fontWeight: 'bold', // Make text bold
    },
});
