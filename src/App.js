import React from "react";
import Home from './components/Home'
import './App.css'
import { AppRegistry, StyleSheet, View, Text, Image } from "react-native";

function App() {
  return (
    <View className = 'container'>
      <Image source={require("./logo.svg")} className = 'imageLogo' style ={styles.imageStyle}/>
      <Text style={styles.container}>React Native is working!</Text>
      {/* <ActivityIndicator /> */}
      <Home />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    fontSize: 20,
    textAlign: "center"
  },
  imageStyle: {
    alignSelf: "center",
    justifyContent: "center",
    height: "20vmin",
    width: "20vmin",
   
  }
 
});

AppRegistry.registerComponent("App", () => App);
export default App;
