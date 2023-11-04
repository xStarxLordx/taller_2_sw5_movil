import React, {Component} from "react";
import { View, StatusBar } from "react-native"
import * as Animatable from "react-native-animatable"
import { StyleSheet } from "react-native";


export default class LoginScreen extends Component{

    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){

        setTimeout(() => {
            this.goToScreen("Login")
        }, 5000, this)
    }

    render(){
        return(
            <View style={styles.image} >
                <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)"/>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,

                    }}
                    source={require("../assets/images/GYM1.png")}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    image: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
    }
})