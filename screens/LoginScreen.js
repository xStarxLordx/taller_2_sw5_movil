import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Logo from "../assets/images/GYM1.png";
import { FIREBASE_AUTH } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification, getAuth, User
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    volkor: require("../assets/fonts/Vollkorn/static/Vollkorn-Regular.ttf"),

  })
  
  const handleSignIn = async () => {
    setLoading(true);
    
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      console.warn(auth.currentUser.emailVerified)
      if(auth.currentUser.emailVerified==true){
        navigation.navigate("Home");
      }
      else{
        alert("Por favor verifica el correo.")
      }
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      
      setLoading(false);
      await setEmail("");
      await setPassword("");
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
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
        alert("Correo de verificación enviado, por favor verifica el correo para poder iniciar sesión.");
      });
      console.warn(auth.currentUser.emailVerified)
      console.log(response);
      
      /* navigation.navigate("Home"); */
    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
      await setEmail("");
      await setPassword("");
    }
  };

  if(!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
          
          <Text
            style={[styles.title, { marginTop: 55 }, { alignSelf: "center" },{color:"white"}]}
          >
            Best Gym
          </Text>
          <View >
          <Image source={Logo} style={[styles.logo,{height: height * 0.35,} ]} resizeMode="contain" />
          </View>
          <KeyboardAvoidingView behavior="position">
          <View style={styles.inpuContainer}>
            <TextInput
            placeholderTextColor={"white"}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholderTextColor={"white"}
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
              <Text style={styles.buttonText}> Iniciar sesión </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.buttonOutline]}
            >
              <Text style={[styles.buttonOutlineText]}> Registrarse </Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: "black",
    flex: 1,
  },
  inpuContainer: {
    width: "90%",
    alignSelf:"center",
    
    padding: 10,
    flex:1
  },
  input: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#610B21",
    borderRadius: 5,
    borderWidth: 2,
    
  },
  buttonContainer: {
    width: "80%",
    alignSelf:"center"
  },
  button: {
    width: "65%",
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: "#555555",
    borderColor: "#610B21",
    borderWidth: 2,
  },
  buttonOutline: {
    backgroundColor: "#555555",
    width: "65%",
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
    borderColor: "#610B21",
    borderWidth: 2,
  },
  buttonOutlineText: {
    fontWeight: "700",
    color: "white",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontFamily: 'volkor',
  },
  title: {
    fontSize: 30,
    color: "black",
    fontFamily: 'volkor',
  },
  logo: {
    width: "70%",
    marginVertical: 30,
    alignSelf:"center",
    
  },
});
