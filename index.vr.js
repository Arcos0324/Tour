import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet
} from 'react-vr';

import WeatherCard from './vr/components/weatherCard';
import Clouds from './vr/components/clouds';
import Game from './vr/components/Game';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export default class PPrincipal extends React.Component {
  //Constructor, se define el fondo inicial y el estatus de la variable mosMenu
  constructor(){
    super();
    this.state = {

      weatherObject: {
        results:[
          {name:'',
           windspeedkm: '',
           skydescriptionlong: '',
           tempc:''
          }
        ],
      },

      placeObject:{
        places:[
          {place:[
              {name: '',
               img: '',
               info: '',
              }
            ]
          }
        ]
      },

      place : 'island-garden.jpg',
      mosMenu : false,
      text : '',
    }
  }

  toggleMenu(){
    this.setState({mosMenu: !this.state.mosMenu})
  }

  componentDidMount(){
    //fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=ad106cf450bcce17f5a1858b6eef11b1', {method: 'GET'})
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas?name=Aguascalientes&date-insert=2017-06-28T19:17:21.762Z', { method: 'GET' })
    .then(response=>response.json())
    .then(json=>this.setState({weatherObject: json}));

    fetch(proxy+'http://jsontour.000webhostapp.com/json.json', {method: 'GET'}).then(response=>response.json()).then(json=>this.setState({placeObject: json}));
  }

  //Cuerpo de la pagina
  render() {
    return (
      <View>
        <View style={styles.Bienvendia}>
          <Text style={styles.BienvenidaT}>Bienvenido a Aguascalientes</Text>
        </View>
        <View style={styles.desplegableM}>
          <View style={styles.desplegable} onEnter={()=> this.toggleMenu()} >
            <Text style={styles.desTexto}>{this.state.mosMenu ? 'Cerrar' : 'Lista de lugares'}</Text>
          </View>
          {
            this.state.mosMenu ?
            <View style={styles.Menu}>
            {
              this.state.placeObject.places.map((place, index)=>{
                return(
                  <View key={index} onEnter={()=> this.setState({place: place.img, info:place.info})} style={styles.menuItem}>
                    <Text style={styles.menuItemText}>{place.name}</Text>
                  </View>
                )
              })
            }
            </View>
            :
            <View>
              <Text></Text>
            </View>
          }
          <View style={styles.info}>
            <Text style={styles.infoText}>{this.state.info}</Text>
          </View>
        </View>
        
        <WeatherCard weatherObject={this.state.weatherObject}/>
        <Clouds wind={this.state.weatherObject.results[0].windspeedkm}/>
        <Pano source={asset(this.state.place)}/>
        <Game/>
      </View>
    );
  }
};


//Estilo de los contenedores y texto
const styles= StyleSheet.create({
  Bienvendia:{
    width: 4,
    height: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
    opacity: 0.8,
    transform:[
      {translate: [-2,0.45,-3]}
    ]
  },
  BienvenidaT:{
    textAlign: 'center',
    fontSize: 0.3,
    color: '#fff'
  },
  Menu:{
    width: 2,
    height: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 12,
    transform: [
      {translate: [12, -1, 0.5]},
      {rotateY: -7}
    ]
  },

  info:{
    backgroundColor: '#7F8C8D',
    opacity: 0.8,
    width: 8.5,
    height: 6.5,
    alignItems: 'center',
    padding: 0.3,
    transform:[{
      translate:
        [ 6, 9, -2]
      }
    ]
  },
  
  infoText:{
    color: '#fff',
    fontSize: 0.4,
    textAlign: 'center'
  },

  desplegable:{
    backgroundColor: '#7F8C8D',
    opacity: 0.8,
    width: 1.6,
    height:1.0,
    alignItems:'center',
    justifyContent: 'center',
    transform:[
      {translate: [2, 0.5, 0.5]},
      {rotateY:0}
    ]
  },

  desplegableM:{
    width: 9.5,
    height: 5.5,
    transform:[
      {translate: [-15, 1, 4.5]},
      {rotateY:110}
    ]
  },

  desTexto:{
  textAlign: 'center',
  fontSize: 0.2,
  color: '#fff'
  },

  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    opacity: 0.7,
    borderRadius: 0.5,
    backgroundColor: '#fff', 
  },

  menuItemText: {
    textAlign: 'center',
    fontSize:0.2,
    color: '#000'
  }
})
AppRegistry.registerComponent('PPrincipal', () => PPrincipal);