import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Logo from "../assets/images/alcancia.png";
import { FIREBASE_AUTH } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Registro exitoso.");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={styles.container}>
        <Text
          style={[styles.title, { marginTop: 70 }, { alignSelf: "center" }]}
        >
          FinanzasApp
        </Text>
        <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
        <View style={styles.inpuContainer}>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}> Iniciar sesión </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={[styles.buttonOutlineText]}> Registrarse </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "white",
    flex: 1,
  },
  inpuContainer: {
    width: "80%",
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
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "65%",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: "#555555",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonOutlineText: {
    fontWeight: "700",
    color: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  logo: {
    width: "60%",
    alignSelf: "center",
  },
});
