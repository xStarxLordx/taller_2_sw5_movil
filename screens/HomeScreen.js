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
import CurrencyInput from "react-native-currency-input";
import { PieChart } from "react-native-chart-kit";
import { useFonts } from "expo-font/build/FontHooks";
import { SelectList } from "react-native-dropdown-select-list";
import { KeyboardAvoidingView } from "react-native";
const HomeScreen = () => {
  const widthAndHeight = 250;
  const [ahorro, setAhorro] = useState("");
  const [ahorroT, setAhorroT] = useState(0);
  const [ingresos, setIngresos] = useState("");
  const [disponible, setDisponible] = useState(0);
  const [alimentacion, setAlimentacion] = useState(0);
  const [hogar, setHogar] = useState(0);
  const [ocio, setOcio] = useState(0);
  const [creditos, setCreditos] = useState(0);
  const [otros, setOtros] = useState(0);
  const [gastos, setGastos] = useState("");
  const [inputIngresos, setInputIngresos] = useState(0);
  const [gastosTotales, setGastosTotales] = useState(0);
  const [value, setValue] = useState(true);
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    volkor: require("../assets/fonts/Vollkorn/static/Vollkorn-Regular.ttf"),
  });
  function formatNumber(number) {
    return new Intl.NumberFormat("ES-CO", {
      style: "currency",
      currency: "COP",
    }).format(number);
  }
  const [selected, setSelected] = useState(null);

  const data = [
    { key: "1", value: "Alimentación" },
    { key: "2", value: "Hogar" },
    { key: "3", value: "Ocio" },
    { key: "4", value: "Creditos" },
    { key: "5", value: "Otros" },
  ];
  const handleEntry = async () => {
    setLoading(true);
    try {
      setInputIngresos(Number(ingresos) + Number(inputIngresos));

      setDisponible(Number(ingresos) + Number(disponible));

      alert("Registro exitoso.");
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
      setIngresos("");
    }
  };
  const handleAhorro = async () =>{
    setAhorroT(Number(ahorro)+Number(ahorroT))
    setDisponible(Number(disponible) - Number(ahorro));
    setAhorro("")
  }
  const handleSpent = () => {
    setLoading(true);
    try {
      if (selected != null) {
        setGastosTotales(Number(gastosTotales) + Number(gastos));
        setDisponible(Number(disponible) - Number(gastos));
        if (selected == "Hogar") {
          setHogar(Number(hogar) + Number(gastos));
        }
        if (selected == "Ocio") {
          setOcio(Number(ocio) + Number(gastos));
        }
        if (selected == "Alimentación") {
          setAlimentacion(Number(alimentacion) + Number(gastos));
        }
        if (selected == "Creditos") {
          setCreditos(Number(creditos) + Number(gastos));
        }
        if (selected == "Otros") {
          setOtros(Number(otros) + Number(gastos));
        }
        alert("Registro exitoso.");
      } else {
        alert("Ingresa categoría de gastos");
      }
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
      setGastos("");
    }
  };
  const handleValue = () => {
    value == true ? setValue(false) : setValue(true);
  };
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.scrollContainer} >

      <ScrollView>
      <View style={[{ alignItems: "center" }, { marginTop: 20 }]}>
        <Text
          style={[
            styles.title,
            { color: "black" },
            { fontSize: 30 },
            { textAlign: "center" },
            { color: "white" },
          ]}
        >
          Balance general
        </Text>
      </View>
      
      
        <KeyboardAvoidingView behavior="padding">
          <ScrollView horizontal>
            <View style={[styles.container, { padding: 5 }]}>
            <View style={[styles.container, { padding: 5 }]}>
                <Text
                  style={[
                    { alignSelf: "flex-start" },
                    { marginStart: 10 },
                    { fontWeight: "bold" },
                    { fontSize: 15 },
                    { marginTop: 8 },
                    { color: "white" },
                  ]}
                >
                  {" "}
                  Ingresos: {formatNumber(Number(inputIngresos))}{" "}
                </Text>
                <Text
                  style={[
                    { alignSelf: "flex-start" },
                    { marginStart: 10 },
                    { fontWeight: "bold" },
                    { fontSize: 15 },
                    { marginTop: 8 },
                    { color: "white" },
                  ]}
                >
                  {" "}
                  Disponible:{" "}
                  <Text style={{ color: "#57a639" }}>
                    {formatNumber(Number(disponible))}{" "}
                  </Text>
                </Text>
                <Text
                  style={[
                    { alignSelf: "flex-start" },
                    { marginStart: 10 },
                    { fontWeight: "bold" },
                    { fontSize: 15 },
                    { marginTop: 8 },
                    { color: "white" },
                  ]}
                >
                  {" "}
                  Gastos totales:{" "}
                  <Text style={{ color: "#F00" }}>
                    {formatNumber(Number(gastosTotales))}{" "}
                  </Text>
                </Text>
                <Text
                  style={[
                    { alignSelf: "flex-start" },
                    { marginStart: 10 },
                    { fontWeight: "bold" },
                    { fontSize: 15 },
                    { marginTop: 8 },
                    { color: "white" },
                  ]}
                >
                  {" "}
                  Ahorro:{" "}
                  <Text style={{ color: "#01DFD7" }}>
                    {formatNumber(Number(ahorroT))}{" "}
                  </Text>
                </Text>
              </View>
              <PieChart
                data={[
                  {
                    name: "Disponible",
                    value: disponible,

                    color: "#57a639",
                    legendFontColor: "white",
                    legendFontSize: 15,
                  },
                  {
                    name: "Gastos totales",
                    value: gastosTotales,
                    color: "#F00",
                    legendFontColor: "white",
                    legendFontSize: 15,
                  },
                   {
            name: 'Ahorro',
            value: ahorroT,
            color: '#01DFD7',
            legendFontColor: 'white',
            legendFontSize: 15,
          },/*
          {
            name: 'Moscow',
            population: 220000,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }, */
                ]}
                width={Dimensions.get("window").width - 16}
                height={220}
                chartConfig={{
                  backgroundColor: "#1cc910",
                  backgroundGradientFrom: "#eff3ff",
                  backgroundGradientTo: "#efefef",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  borderColor: "black",
                  borderWidth: 2,
                }}
                accessor="value"
                backgroundColor="grey"
                paddingLeft="1"
                //absolute={value}

                //For the absolute number else percentage
              />
            </View>
            
            {gastosTotales==0 ? null : <View style={[styles.container, { padding: 5 }]}>
              
              
                <View style={[styles.container, { padding: 5 }]}>
                {alimentacion == 0 ? null : (
                  <Text
                    style={[
                      { alignSelf: "flex-start" },
                      { marginStart: 10 },
                      { fontWeight: "bold" },
                      { fontSize: 15 },
                      { marginTop: 8 },
                      { color: "white" },
                    ]}
                  >
                    {" "}
                    Alimentacion:{" "}
                    <Text style={{ color: "#FE9A2E" }}>
                      {formatNumber(Number(alimentacion))}{" "}
                    </Text>
                  </Text>
                )}
                  {hogar == 0 ? null : (
                    <Text
                      style={[
                        { alignSelf: "flex-start" },
                        { marginStart: 10 },
                        { fontWeight: "bold" },
                        { fontSize: 15 },
                        { marginTop: 8 },
                        { color: "white" },
                      ]}
                    >
                      {" "}
                      Hogar:{" "}
                      <Text style={{ color: "#2ECCFA" }}>
                        {formatNumber(Number(hogar))}{" "}
                      </Text>
                    </Text>
                  )}

                  {ocio == 0 ? null : (
                    <Text
                      style={[
                        { alignSelf: "flex-start" },
                        { marginStart: 10 },
                        { fontWeight: "bold" },
                        { fontSize: 15 },
                        { marginTop: 8 },
                        { color: "white" },
                      ]}
                    >
                      {" "}
                      Ocio:{" "}
                      <Text style={{ color: "#AC58FA" }}>
                        {formatNumber(Number(ocio))}{" "}
                      </Text>
                    </Text>
                  )}
                  {creditos == 0 ? null : (
                    <Text
                      style={[
                        { alignSelf: "flex-start" },
                        { marginStart: 10 },
                        { fontWeight: "bold" },
                        { fontSize: 15 },
                        { marginTop: 8 },
                        { color: "white" },
                      ]}
                    >
                      {" "}
                      Creditos:{" "}
                      <Text style={{ color: "#2EFE2E" }}>
                        {formatNumber(Number(creditos))}{" "}
                      </Text>
                    </Text>
                  )}
                  {otros == 0 ? null : (
                    <Text
                      style={[
                        { alignSelf: "flex-start" },
                        { marginStart: 10 },
                        { fontWeight: "bold" },
                        { fontSize: 15 },
                        { marginTop: 8 },
                        { color: "white" },
                      ]}
                    >
                      {" "}
                      Otros:{" "}
                      <Text style={{ color: "#0040FF" }}>
                        {formatNumber(Number(otros))}{" "}
                      </Text>
                    </Text>
                  )}
                </View>
                <View>
                <PieChart
                  data={[
                    {
                      name: "Alimentacion",
                      gasto: alimentacion,

                      color: "#FE9A2E",
                      legendFontColor: "white",
                      legendFontSize: 15,
                    },
                    {
                      name: "Hogar",
                      gasto: hogar,
                      color: "#2ECCFA",
                      legendFontColor: "white",
                      legendFontSize: 15,
                    },
                    {
                      name: "Ocio",
                      gasto: ocio,
                      color: "#AC58FA",
                      legendFontColor: "white",
                      legendFontSize: 15,
                    },
                    {
                      name: "Creditos",
                      gasto: creditos,
                      color: "#2EFE2E",
                      legendFontColor: "white",
                      legendFontSize: 15,
                    },
                    {
                      name: "Otros",
                      gasto: otros,
                      color: "#0040FF",
                      legendFontColor: "white",
                      legendFontSize: 15,
                    },
                  ]}
                  width={Dimensions.get("window").width - 16}
                  height={220}
                  chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,

                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                  }}
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                  accessor="gasto"
                  backgroundColor="grey"
                  paddingLeft="1"
                  //absolute={value}
                  //For the absolute number else percentage
                />
              </View>
            </View>}
          </ScrollView>
          {/* <TouchableOpacity onPress={handleValue} style={styles.button}>
              <Text style={styles.buttonText}>
                {" "}
                {value == true ? "Porcentaje" : "Pesos"}{" "}
              </Text>
            </TouchableOpacity> */}

          <View style={[styles.inpuContainer, { alignSelf: "center" }]}>
            <Text style={styles.textinput}>Ingresos:</Text>
            <TextInput
              placeholderTextColor={"#2E2E2E"}
              keyboardType="number-pad"
              placeholder="Ingresos"
              name="ingresos"
              value={ingresos}
              onChangeText={(text) => {
                setIngresos(text);
              }}
              style={styles.input}
            />
            <TouchableOpacity onPress={handleEntry} style={styles.button}>
              <Text style={styles.buttonText}> Registrar ingresos </Text>
            </TouchableOpacity>
            <Text style={styles.textinput}>Gastos:</Text>
            <TextInput
              placeholderTextColor={"#2E2E2E"}
              placeholder="Gastos"
              keyboardType="number-pad"
              value={gastos}
              onChangeText={(text) => {
                setGastos(text);
              }}
              style={styles.input}
            />
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              inputStyles={[{ color: "#2E2E2E" }]}
              boxStyles={[
                { shadowColor: "white" },
                { backgroundColor: "grey" },
                { borderColor: "black" },
                { borderWidth: 2 },
              ]}
              dropdownTextStyles={[
                { color: "white" },

                { borderBottomWidth: 2 },
              ]}
              dropdownStyles={[{ backgroundColor: "grey" }, { borderWidth: 2 }]}
              text
            />

            <TouchableOpacity onPress={handleSpent} style={styles.button}>
              <Text style={styles.buttonText}> Registrar gastos </Text>
            </TouchableOpacity>
            <Text style={styles.textinput}>Ahorro:</Text>
            
            <TextInput
              
              placeholderTextColor={"#2E2E2E"}
              keyboardType="number-pad"
              placeholder="Ahorro"
              name="ahorro"
              value={ahorro}
              onChangeText={(text) => {
                setAhorro(text);
              }}
              style={styles.input}
            />
            <TouchableOpacity onPress={handleAhorro} style={styles.button}>
              <Text style={styles.buttonText}> Registrar Ahorro </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
