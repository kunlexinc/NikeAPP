import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";

export default function ProductScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />

      {/* <Image
  source={{
    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
  }}
  style={{width: "100%", aspectRatio: 1}}
/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  image: { width: "100%", aspectRatio: 1 },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
