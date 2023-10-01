import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React, { Component, useState } from "react";
import PieChart from "react-native-pie-chart";

const HomeScreen = () => {
  const widthAndHeight = 250;
  const [ingresos, setIngresos] = useState(1);
  const [total, setTotal] = useState(1);
  const [libre, setLibre] = useState(1);
  const [gastos, setGastos] = useState(0);
  const [inputIngresos, setInputIngresos] = useState("")
  const [inputGastos, setInputGastos] = useState("")
  const series = [libre, gastos];
  const sliceColor = ["#4CAF50", "#FF9800"];
  const [loading, setLoading] = useState(false);
  const handleEntry = () => {
    
    try {
      setIngresos(inputIngresos)

      setTotal(inputIngresos)
      
      setLibre(total)
      
      alert("Registro exitoso.");
      
    } catch (error) {
      console.log(error);
      alert("Error");
    } 
  };
  const handleSpent =  () => {
    setLoading(true);
    try {
      setGastos((inputGastos))
      setTotal(total-gastos)
      setLibre(total-gastos)
      
      alert("Registro exitoso.");
      
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
    <ScrollView >
      <View style={[{ alignItems: "center" }, { marginTop: 60 }]}>
        <Text
          style={[{ color: "black" }, { fontWeight: "bold" }, { fontSize: 40 }]}
        >
          HomeScreen
        </Text>
      </View>
      <View style={[{alignItems:"flex-start"},{padding:10}]}>
      <Text style={[styles.text, {color:"#2196F3"}]}> Ingresos: {ingresos} </Text>
      <Text style={[styles.text,{color:"#FF9800"}]}> Gastos: {gastos} </Text>
      <Text style={[styles.text,{color:"#4CAF50"}]}> Libre: {libre} </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Balance</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
      </View>
      <View style={[styles.inpuContainer, { alignSelf: "center" }]}>
      <Text>Ingresos mensuales:</Text>
        <TextInput
          placeholder="Ingresos mensuales"
          name="ingresos"
         
          onChangeText={(text) => {
            setInputIngresos(text)
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleEntry} style={styles.button}>
            <Text style={styles.buttonText}> Registrar ingresos </Text>
        </TouchableOpacity>
        <Text>Gastos:</Text>
        <TextInput
          placeholder="Gastos mensuales"
          
          
          onChangeText={(text) => {
            setInputGastos(text)}
          }
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSpent} style={styles.button}>
            <Text style={styles.buttonText}> Registrar gastos </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
  },
  inpuContainer: {
    width: "80%",
  },
  text:{
    fontWeight:"bold",
    fontSize: 20
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
});
