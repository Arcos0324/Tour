import React from 'react';
import {Box, Cylinder, Sphere,} from 'react-vr';

const shapes=[Box, Cylinder, Sphere];
export {shapes};
export default class Shape extends React.Component {
    render(){
        let Component=shapes[this.props.shapeNum];
        let colors = ['#C33000', '#1FA001', '#214EB4', '#D3B010'];
        return(
            <Component style={{
                colors: texture[this.props.colorNum],
                transform: this.props.transform,
            }}/>
        )
    }
}