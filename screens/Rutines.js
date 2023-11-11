import React, { useEffect, useState } from "react";
import { Text, StyleSheet, SafeAreaView, View, ScrollView, Pressable, FlatList, ActivityIndicator } from "react-native";
import {
  FIREBASE_APP,
  FIREBASE_DB,
  getFirestore,
  collection,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc
} from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { doc } from "firebase/firestore";
import RutineList from "./RutineList";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
function Rutines() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(FIREBASE_DB, "rutines"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, doc.data());
      setList(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})));
      console.log(list);
      return(null)
    });
  }; 
  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <SafeAreaView style={styles.scrollContainer}>
      
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              { color: "black" },
              { fontSize: 30 },
              { textAlign: "center" },
              { color: "white" },
            ]}
          >
            Rutinas
          </Text>
          <Pressable style={{marginTop:10}}>
              <FontAwesome name="refresh" size={30} color="white" onPress={getData}/>
          </Pressable>
          <Pressable style={{marginTop:7}}>
              <Ionicons name="md-chevron-back-circle-outline" size={40} color="white" onPress={() => navigation.navigate("Home")}/>
          </Pressable>
          
          </View>
          {/* {list.length != undefined ? (<ActivityIndicator/>) : (
           <FlatList 
            data={list}
            renderItem={({ item })=> <RutineList category={item["category"]} objetive={item["objetive"]} description={item["description"]}/> }
            keyExtractor={(item) => item["id"]}
          />  
          )
          } */}
          <FlatList 
            
            data={list}
            renderItem={({item}) => <RutineList category={item.category} objetive={item.objetive} description={item.description} getData={getData} id={item.id}/> }
            keyExtractor={(item )=> item.id}
          />  
          
          
          
        
          
      
    </SafeAreaView>
  );
}

export default Rutines;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#323232",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header:{
    marginTop:20,
    flexDirection: "row",
    backgroundColor: "#323232",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
    alignContent: "center",
  }
});
