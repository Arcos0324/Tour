import React from 'react';
import { View, Text, SytleSheet}from 'react-vr';

import Shape, {shapes} from './Shapes'
export default class Game extends React.Component{
    constructor(){
        super();
    
        this.state={
          gameShapes: [1, 1, 1, 1],
          score: 0,
          specialIndex: 0
        }
    }
    
    
    componentDidMount(){
    //Guardar el record
        AsyncStorage.getItem('score')
        .then(value=> { 
          console.log('score', value);
          this.setState({score: value});
        })
        this.newGameSet();
    }
    
    newGameSet(){
        console.log("New game set!");
        let baseShapeId = Math.floor(Math.random() * shapes.length);
        console.log('baseShapeId', baseShapeId);
        let specialShapeId = baseShapeId;
    
        while(specialShapeId === baseShapeId){
          specialShapeId = Math.floor(Math.random() * shapes.length)
        }
           
    
        console.log('specialShapeId', specialShapeId);
    
        let newGameShapes= [];
    
        for (let i = 0; i<this.state.gameShapes.length; i++){
          newGameShapes[i] = baseShapeId;
        }
    
        let specialIndex = Math.floor(Math.random()* newGameShapes.length);
        newGameShapes[specialIndex] = specialShapeId;
        this.setState({gameShapes: newGameShapes, specialIndex: specialIndex});
    }
    
    pickShape(shapeIndex){
        console.log('sahpeIndex', shapeIndex);
        let score= this.state.score;
        score=this.state.specialIndex === shapeIndex ? score + 1 : score - 1;
    
        this.setState({score});
    
        //Pone el record
        AsyncStorage.setItem('score', score);
    
        this.newGameSet();
    }
    render() {
        return (
          <View>
            <Text style={styles.text}>
              Juego (Prueba1)
            </Text>
            <Text style={styles.text}>
              {this.state.score}
            </Text>
            {
              this.state.gameShapes.map((shape, index)=>{
                return (
                  <View key={index}
                  onEnter={()=>this.pickShape(index)}>
                    <Shape shapeNum={shape} colorNum={index} transform={[{translate: [(index-1.5)*1.5, 0, -5]}]}/>
                  </View>
                )
              })
            }
          </View>
        );
    }
};
const styles= StyleSheet.create({  
    text:{
        textAlign: 'center',
        fontSize: 0.5,
        transform: [
            {translate: [0, 2, -5]}
        ]
    }
});