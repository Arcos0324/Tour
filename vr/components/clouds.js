import React from 'react';
import{ Model, Animated, View, asset}from 'react-vr';

export default class clouds extends React.Component{ 
    constructor(){
        super();

        this.state={
            xValue: new Animated.Value(100),
        }
        setInterval(()=> this.animatedClouds(), 5000);
    }

    animatedClouds(){
        if(this.state.xValue._value < 0){
            this.setState({xValue: new Animated.Value(100)})
        }
        else{
            Animated.timing(this.state.xValue,{
                toValue: -100,
                duration: 3000
            }).start();
        } 
    }

    componentDidMount(){
        this.animatedClouds();
    }

    render(){
        return(
            <Animated.View style={{
                transform:[
                    {translate: [0,200,0]},
                    {rotateX: 80},
                    {translateX: this.state.xValue},
                    //{rotateZ: this.props}
                ]
            }}>
                <Model
                    scale = {0.05}
                    color ='#000'
                    //texture={'../static_assets/Texturas/Black.jpg'}
                    source={{
                        obj: asset('Objetos3D/tinker.obj')
                    }}
                />
            </Animated.View>
        )
    }
}