import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import React, { Component, useState } from "react";
import CurrencyInput from 'react-native-currency-input';
import { PieChart } from "react-native-chart-kit";
import { useFonts } from "expo-font/build/FontHooks";
const HomeScreen = () => {
  const widthAndHeight = 250;
  const [ingresos, setIngresos] = useState("");

  const [disponible, setDisponible] = useState(0);
  const [gastos, setGastos] = useState("");
  const [inputIngresos, setInputIngresos] = useState(0)
  const [gastosTotales, setGastosTotales] = useState(0)
  const series = [disponible, gastos];
  const sliceColor = ["#4CAF50", "#FF9800"];
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    volkor: require("../assets/fonts/Vollkorn/static/Vollkorn-Regular.ttf"),

  })
  function formatNumber(number){
    return new Intl.NumberFormat("ES-CO",  {
      style: "currency",
      currency: "COP",
    }).format(number)

  }
  const handleEntry = async () => {
    setLoading(true);
    try {
      

      setInputIngresos(Number(ingresos)+Number(inputIngresos))
      
      setDisponible(Number(ingresos)+Number(disponible))
     
      alert("Registro exitoso.");
      
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
      setIngresos("")
    }
  };
  const handleSpent =  () => {
    setLoading(true);
    try {
      setGastosTotales(Number(gastosTotales)+Number(gastos))

      setDisponible(Number(disponible)-Number(gastos))
      
      alert("Registro exitoso.");
      
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
      setGastos("")
    }
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
    <ScrollView >
      <View style={[{ alignItems: "center" }, { marginTop: 60 }]}>
        <Text
          style={[styles.title,{ color: "black" }, { fontSize: 30 }, {textAlign:"center"}, {color:"white"}]}
        >
          Balance general
        </Text>
        <Text style={[{alignSelf:"flex-start"},{marginStart:10}, {fontWeight:"bold"}, {fontSize:20}, {marginTop:20}, {color:"white"}] } > Ingresos: {formatNumber(Number(inputIngresos))} </Text>
        <Text style={[{alignSelf:"flex-start"},{marginStart:10}, {fontWeight:"bold"}, {fontSize:20}, {marginTop:20}, {color:"white"}] } > Disponible: <Text style={{color:"#57a639"}} >{formatNumber(Number(disponible))} </Text></Text>
        <Text style={[{alignSelf:"flex-start"},{marginStart:10}, {fontWeight:"bold"}, {fontSize:20}, {marginTop:20}, {color:"white"}] } > Gastos: <Text style={{color:"#F00"}}>{formatNumber(Number(gastosTotales))} </Text></Text>
      </View>
      
      <View style={styles.container}>
      
      <PieChart
        data={[
          {
            name: 'Disponible',
            value: disponible,
          
            color: '#57a639',
            legendFontColor: 'white',
            legendFontSize: 15,
          },
          {
            name: 'Gastos',
            value: gastosTotales,
            color: '#F00',
            legendFontColor: 'white',
            legendFontSize: 15,
          },
          /* {
            name: 'New York',
            population: 28000,
            color: '#ffffff',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Moscow',
            population: 220000,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }, */
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="value"
        backgroundColor="grey"
        paddingLeft="1"
         //For the absolute number else percentage
      />
        
      </View>
      <View style={[styles.inpuContainer, { alignSelf: "center" }]}>
      <Text style= {styles.textinput}>Ingresos:</Text>
        <TextInput
        placeholderTextColor={"white"}
          keyboardType="number-pad"
          placeholder="Ingresos"
          name="ingresos"
          value={ingresos}
          onChangeText={(text) => {
            setIngresos(text)
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleEntry} style={styles.button}>
            <Text style={styles.buttonText}> Registrar ingresos </Text>
        </TouchableOpacity>
        <Text style= {styles.textinput}>Gastos:</Text>
        <TextInput
          placeholderTextColor={"white"}
          placeholder="Gastos"
          keyboardType="number-pad"
          
          value={gastos}
          onChangeText={(text) => {
            setGastos(text)}
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
    backgroundColor: "#323232"
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontFamily: 'volkor',
  },
  input: {
    backgroundColor: "grey",
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
    fontSize: 20,
    color:"white"
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
  textinput:{
    color:"white"
  }
});
