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
import json from './vr/components/json;'

//const apiKey = 'ad106cf450bcce17f5a1858b6eef11b1';
/*const places=[
  {
    name: 'Isla de San Marcos',
    imagen: 'island-garden.jpg',
    info: 'Éste es un recito ferial inaugurado el año 2006 '+
          'que 44 hectareas.Se encuantra fuera del perimetro '+
          'ferial pero durante la Feria de San Marcos. '+
          'Dentro de la isla se encuentra el reloj más grande '+
          'de latinoamerica, junto a él podemos conocer '+
          'diversas maneras de cuidar el planeta. La entrada '+
          'es totalmente gratis. En laentrada se puede '+
          'apreciar la mejestuosidad de "la catrina" con una '+
          'altura aproximadamente de 15m. Tambien podemos ver '+
          'la expo ganadera donde podemos apreciar grandes '+
          'muestras del arte culinario, asi como tambien el '+
          'foro donde se precentan diariamente una gran variendad '+
          'de artistas.'
  },
  {
    name: 'Museo Jose Guadalupe Posada',
    imagen: 'lombard-vr.jpg',
    info: 'Éste muse se encuentra en Tarina, donde podemos apreciae exhibiciones permanentes '+
          'de sus obra, como es "La Catrina". En el museo se pueden apreciar varias de sus '+
          'obras alrededor de 200 placas originales y 300 estampas de la época. En sus '+
          'trabajos se comunica con el mexicano, a través de dibujos de asesinatos, '+
          'inundaciones y tambien de las famosas calaveras de tinte politico. Actualmente el '+
          'museo está abireto en general, que a través de visitas guiadas puede conocer un '+
          'poco mas de la vida y obra de este ilustre grabador hidrocalido. de iguak manera '+
          'frecuentemente se exhiben ecposiciones temporales de diferentes artistas.'
  },
  {
    name: 'Plaza Patria',
    imagen: 'louvre-vr.jpg',
    info: 'Plaza patria, anterior mente llamada plaza de armas, es el centro de la ciudad '+
          'de aguascalientes. En el centro de la plaza se encuentra ubicada en la Exedra, el '+
          'monumeto se levanto, en 1808 en honor al ret Carlos IV de España. A principos de '+
          'los 80 se colocó el águila reoublicana en lo alto de la columna. '+
          'Años despues se construyó el kiosko, sin embargo fue en 1947 cuando la plaza '+ 
          'sufrio los cambios que la dejaron en su actual estado. Ademas en ese mismo periodo '+
          'se reduseñó la dedicada a Manuel M. Ponce.'
  },
  {
    name: 'Jardin de San Marcos',
    imagen: 'Mus1.jpg',
    info: 'Desde 1831 el jardin representa un punto de convivencia y reacreacion para los '+
          'locatarios, se encuentra adornado con bancas de hierro; una fuente situada bajo el '+
          'kiosko, esculturas que repecentan las constumbres y tradiciones de los hidrocalidos '+
          'y cuatro accesos. Ademas es anfitrion incondicional de la feria nacional de san marcos, '+ 
          'aqui tambien se da lugar cada 25 de abril a la celebracion de una tradicional verbena '+ 
          'popular para celebrar al Santo Patrono San Marcos oara agradecerle por una fiesta más.'
  },
  {
    name: 'Plaza Tres Centuras',
    imagen: 'museum.jpg',
    info: 'Este sitio fue inaugurado el 4 de marzo de 2003 y lleba por nombre tres Centurias '+
          'por los siglos XIX, XX y XXI.El reloj monumetal de 2.30 metros de diametro fue construido '+
          'en honor a los trabajadores, ademas es una replica exacta del reloj original que utilizaban mas '+
          'de dos mil trabajadores de la casa redonda para saber su inicio y su fin de jornada laboral. '+
          'Tambien se puede adminar unas fuentes danzarinas en el minuto 15 de cada hora y tambien adminar '+ 
          'locomotoras y vagones de imponente tamaño'
  },
  {
    name: 'Cerro del Muerto',
    imagen: 'san-francisco-vr.jpg',
    info: 'Existen varias leyendas sobre el cerro del muerto, pero una de las más conocidas '+
          'es en la que en un grupo de indios (Chichimecas, Chalcas, Nahuatlacas) se '+
          'encontraban tres sacerdotes (uno para cada pueblo) los que eran extremadamente '+
          'altos,fornidos y de aspecto majestuoso e imponente. Un dia uno de los sacerdotes '+
          'se perdio, los chichimecas al ver que no volvia su sacerdote creyeron que se trataba '+
          'de Chalcas quienes mataron a sus sacerdote. Asi que se dispusieron a atacar. Los chalcas '+
          'repelireon su ataque y vieron por con sorpresa que venia el sacerdote perdido. Ya no era '+
          'posible retoceder y sin quererlo, una flecha le atravesó el corazon. Tratando de huir el '+
          'sacerdote dejo un rastro de sangre (la cual aun se puede ver). Unos instantes despues '+
          'cayó muerto y con su cuerpo sepultó a todo el pueblo chichimeca. Con sus cadaveres se '+
          'fomró el famoso cerrro del muerto. Y debajo de el se encuentra todas las riquesas del pueblo.'
  },
  {
    name: 'lugar 2',
    imagen: 'starry-sky.jpg',
    info: 'Septima imagen... Informaciòn'
  },
  {
    name: 'lugar 1',
    imagen: 'Winter-outdoor.jpg',
    info: 'Octava informaciòn... Informaciòn'
  },
]*/

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

    fetch('./vr/components/json', {method: 'GET'}).then(response=>response.json()).then(json=>this.setState({placeObject: json}));
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
              places.map((place, index)=>{
                return(
                  <View key={index} onEnter={()=> this.setState({place: place.imagen, info:place.info})} style={styles.menuItem}>
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