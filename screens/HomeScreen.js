import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { Component, useState } from "react";
import { useFonts } from "expo-font/build/FontHooks";
import { SelectList } from "react-native-dropdown-select-list";
import { KeyboardAvoidingView } from "react-native";
const HomeScreen = () => {
  const widthAndHeight = 250;
  const [value, setValue] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [fontsLoaded] = useFonts({
    volkor: require("../assets/fonts/Vollkorn/static/Vollkorn-Regular.ttf"),
  });
  
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#323232",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontFamily: "volkor",
  },
  input: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
  inpuContainer: {
    width: "80%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
  button: {
    width: "65%",
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: "#555555",
    borderColor: "black",
    borderWidth: 1,
  },
  textinput: {
    color: "white",
  },
});
