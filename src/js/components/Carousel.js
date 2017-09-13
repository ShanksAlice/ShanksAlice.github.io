/**
 * Created by huangling on 21/05/2017.
 */

import React, { Component } from 'react';

export const Carousel1 = (props) => {
    const {children} = props;
    const activators = [];
    const controls = [];
    const tracks = React.Children.map(children, (child, index) => {
        return (
            <div className="carousel__slide" key={index}>
                {child}
            </div>
        );
    });

    const count = tracks.length;
    for (let i = 0; i < count; i++) {
        activators.push(
            <input key={i} className="carousel__activator" type="radio" name="carousel" id={i} defaultChecked={i == 0}/>
        );

        controls.push(
            <div className="carousel__controls" key={i}>
                <label className="carousel__control carousel__control--backward" htmlFor={(count + i + 2) % count}/>
                <label className="carousel__control carousel__control--forward" htmlFor={(i + 1) % count}/>
            </div>
        )
    }

    return (
        <div className="carousel-container">
            <img className='quote' src="http://static.91convert.com/site/client_say_bg.png"/>
            <div className="carousel carousel--translate">
                {activators}
                {controls}
                <div className="carousel__track">{tracks}</div>
            </div>
        </div>
    );
};


class Carousel2 extends Component {
    componentWillMount() {
        this.deg = 0;
    }

    componentDidMount() {
        const count = this.props.children.length;
        // for(let i =0 ; i< count; i++) {
        //     const track = this['track' + i];
        //     const width = getComputedStyle(track).width.replace('px', '');
        //     const tranZ = width / 2/ Math.tan((360/3/2/180 * Math.PI)) + 20;
        //     track.style.transform = `rotateY(${i * 120}deg) translateZ(${tranZ}px)`;
        // }
    }

    goNext = () => {
        const rotate = `rotateY(${this.deg += 120}deg)`;
        this.container.style.transform = rotate;
    };

    goPrev = () => {
        this.container.style.transform = `rotateY(${this.deg -= 120}deg)`;
    };

    render () {
        const {children} = this.props;
        // const tracks = React.Children.map(children, (child, index) => {
        //     return (
        //         <div className="carousel2-track" key={index} ref={node => this['track' + index] = node}>
        //             {child}
        //         </div>
        //     );
        // });

        return (
            <div className="carousel2-container">
                <div className="carousel__controls-left" onClick={this.goPrev}/>
                <div className="track-container" ref={node => this.container = node}>
                    {children}
                </div>
                <div className="carousel__controls-right" onClick={this.goNext}/>
            </div>
        );
    }
}

export default Carousel2;