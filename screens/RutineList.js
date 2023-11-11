import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {
  FIREBASE_APP,
  FIREBASE_DB,
  getFirestore,
  collection,
  updateDoc,
  getDocs,
  getDoc,
  doc
} from "../firebase";
import { deleteDoc } from 'firebase/firestore';
const RutineList = (props) => {
  const [checked, setChecked] = useState(false)
  console.log(props.objetive)
  const deleteData = async () => {

    await deleteDoc(doc(FIREBASE_DB, "rutines", props.id));
    props.getData()
    return(null)
  }
  return (
    
  <View style={styles.container}>
      {checked == true ?
        <Pressable onPress={()=>setChecked(!checked)}> 
          <Fontisto name="checkbox-active" size={24} color="black" />
        </Pressable> :
        <Pressable onPress={()=>setChecked(!checked)}> 
          <Fontisto name="checkbox-passive" size={24} color="black" />
        </Pressable>
        }
      
      
      <ScrollView style={{flex:1}} persistentScrollbar>
      
        <Text style= {styles.title}>{props.category}</Text>
      
        <Text style= {styles.title}>{props.description}</Text>

        <Text style= {styles.title}>{props.objetive}</Text>
      
      </ScrollView>
      <Pressable onPress={deleteData}> 
        <FontAwesome5 name="trash" size={24} color="black" />
      </Pressable>
    
    </View>  
  )
}

export default RutineList

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    backgroundColor: "lightgrey",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    width:"90%",
    alignSelf: "center",
    borderRadius: 7,
    height: "auto",
    borderColor: "black",
    borderWidth: 3,
    borderRadius:10,
    marginTop:10
  },
  title:{
    flex: 1,
    marginHorizontal:10,
    marginVertical: 5,
    color: "black",
    fontSize: 17,
    fontWeight: "500",
    borderColor: "black",
    borderWidth: 3,
    borderRadius:10,
    padding:5
  }

})