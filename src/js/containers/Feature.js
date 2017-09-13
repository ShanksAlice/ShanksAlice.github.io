/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Block from '../components/Block';
import Button from '../components/Button';
import TryNow from '../components/TryNow';
import {
    featureDesc,
    features
} from '../constants/feature'


const SectionGroup = ({ title, desc, blocks, id, tryNow }) => (
    <div className="section-group">
        <span className="hash" id={id}/>
        <Description title={title} desc={desc}/>

        <section className="figure">
            <figure>
                <img src={`http://static.91convert.com/site/${id}_concept.png`}
                     srcSet={`http://static.91convert.com/site/${id}_concept.png 2x`}/>
            </figure>
        </section>

        <section className="category justify-between direction-row">
            {blocks.map((block, index) => <Block key={index} {...block} align="start"/>)}
        </section>

        <div className="row">
            <Button isLink type="blank" padding="large" href="/form">
                <span className="arrow3" >{tryNow}</span>
            </Button>
        </div>
    </div>
);

export default class Feature extends Component {
    componentDidMount() {
        this.scrollTo();
    }

    componentDidUpdate(preProps) {
        if (preProps.location.hash != this.props.location.hash) {
            this.scrollTo(this.props.location.hash);
        }
    }

    scrollTo = (id) => {
        let top = 0;
        id = id || window.location.hash;
        switch (id) {
            case '#people':
                top = 330;
                break;
            case '#engage':
                top = 1110;
                break;
            case '#automation':
                top = 1910;
                break;
            case '#insight':
                top = 3074;
                break;
        }
        window.scrollTo(0, top);
    };

    render() {
        return (
            <div>
                <Header />
                <content>
                    <Landing title="对于做营销，我们很有用， 甚至还有点好用" id="people">
                        <div className="row">
                            {features.map(({ anchor, img, text }, index) => (
                                <a className="block" href={anchor} key={index}>
                                    <figure>
                                        <img src={`http://static.91convert.com/site/${img}.png`}/>
                                    </figure>
                                    <div className="desc">{text}</div>
                                </a>
                            ))}
                        </div>
                    </Landing>
                    {featureDesc.map((feature, index) => <SectionGroup key={index} {...feature}/>)}
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}