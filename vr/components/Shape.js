import React from 'react';
import {Box, Cylinder, Sphere,} from 'react-vr';

const shapes=[Box, Cylinder, Sphere];
export {shapes};
export default class Shape extends React.Component {
    render(){
        let Component=shapes[this.props.shapeNum];
        let texture=[];
        return(
            <Component style={{
                texture: texture[this.props.textureNum],
                transform: this.props.transform,
            }}
        )
    }
}