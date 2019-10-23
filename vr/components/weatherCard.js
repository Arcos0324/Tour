import React from 'react';
import { Text, View, Image, StyleSheet } from "react-vr";

export default class weatherCard extends React.Component{
    render(){
        console.log('WeatherCard props', this.props);
        return(
            <View style={styles.contenedor}>
                <Text style={styles.contTexto}>{this.props.weatherObject.results[0].name}</Text>
                <Text style={styles.contTexto}>Velocidad del viento: {this.props.weatherObject.results[0].windspeedkm} Km</Text>
                <Text style={styles.contTexto}>Descripción del clima: {this.props.weatherObject.results[0].skydescriptionlong}</Text>
                <Text style={styles.contTexto}>Temperatura: {this.props.weatherObject.results[0].tempc} C</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    contenedor:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7F8C8D',
        opacity: 0.6, 
        width: 7,
        height: 8,
        transform:[
            {translate:[ -3, 3, 20]},
            {rotateY: 180},
        ]
    },
    contTexto:{
        fontSize:0.8,
        textAlign: 'center'
    }
})