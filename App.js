import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContactScreen from "./ContactScreen";
import Contact from "./components/Contact";

export default function App() {
     return (
          <View style={styles.container}>
               <ContactScreen />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 50,
          // backgroundColor: "#fff",
          // alignItems: "center",
          // justifyContent: "center",
     },
});
