import React, { useReducer } from "react";
import RutinesContext from "./rutinesContext";
import rutinesReducer from "./rutinesReducer";

const RutinesStage = props => {
    const inicialStage = {
        menu: []
    }

    const[state, dispach] = useReducer(firebaseReducer);
    return(
        <RutinesContext.Provider 
            value={{
                rutines: state.menu,
                
            }}
        
        >
            {props.children}
        </RutinesContext.Provider>
    )
}

export default RutinesStage;