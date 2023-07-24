import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import products from './src/data/products';
import ProductScreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <ProductScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  

});
