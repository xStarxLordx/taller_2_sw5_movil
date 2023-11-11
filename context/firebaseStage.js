import React, { useReducer } from "react";
import firebase from "../firebase"
import FirebaseContext from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";

const FirebaseStage = props => {
    const inicialStage = {
        menu: []
    }

    const[state, dispach] = useReducer(firebaseReducer);
    return(
        <FirebaseContext.Provider 
            value={{
                menu: state.menu,
                firebase
            }}
        
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseStage;