/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Block from '../components/Block';
import Button from '../components/Button';
import Landing from '../components/Landing';
import Layer from '../components/Layer';
import Carousel, { Carousel1 } from '../components/Carousel';
import TryNow from '../components/TryNow';
import { carouselData, categoryData } from '../constants/home';

const CarouselBlock = ({ title, desc, img }) => (
    <div className="container">
        <div className="block">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            <div className="img">{img}</div>
        </div>
    </div>
);

const logos = [];
for (let i = 1; i < 14; i++) {
    const num = i < 10 ? ('0' + i) : i;
    logos.push(`logo${num}.png`);
}

const examples = [{
    icon: 'indu_financial',
    text: '金融'
}, {
    icon: 'indu_shopping',
    text: '快销&零售'
},{
    icon: 'indu_service',
    text: '服务'
},{
    icon: 'indu_car',
    text: '汽车'
},{
    icon: 'indu_internet',
    text: '互联网'
}];

export default class Home extends Component {
    componentWillMount() {
        this.state = {
            showVideo: false
        };
    }
    
    playVideo = () => {
        document.getElementsByTagName('video')[0].play();
        this.setState({ showVideo: true });
    };

    hideVideo = () => {
        document.getElementsByTagName('video')[0].pause();
        this.setState({ showVideo: false })
    };

    render() {
        const { showVideo } = this.state;
        return (
            <div>
                <Header />
                <content>
                    <Landing className="home" backgroudImg="banner_bg"
                             title="企业一站式营销云" desc="我们致力于用技术让营销变得简单"
                    >
                        <Button isLink href="/form" color="orange" padding="xlarge" fontSize="large">
                            免 费 试 用
                        </Button>
                    </Landing>

                    <Description
                        desc="Digital Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的营销策略，并持续与客户进行个性化的互动，提升客户体验，最终达成商业目标。"
                        title="Digital Marketing Hub营销云">
                        <div className="row">
                        </div>
                    </Description>

                    <section className="category justify-between direction-row">
                        {categoryData.map(({img, title, desc, to}, index) => (
                            <Block icon={
                                <div className="img">
                                    <img src={`http://static.91convert.com/site/${img}.png`}
                                         srcSet={`http://static.91convert.com/site/${img}.png 2x`}/>
                                </div>
                            }
                                   descAlign="center"
                                   title={title}
                                   desc={desc}
                                   key={index}
                            >
                                <a className="more arrow" href={'/feature#' + to}>了解更多</a>
                            </Block>
                        ))}
                    </section>

                    <Description className="video" align="center"
                        desc="中国市场消费者正在发生变化，看Digital Marketing Hub如何顺应时代为企业带来营销2.0转型升级。"
                        title="观看视频">
                        <div onClick={this.playVideo} className="video-icon"/>
                    </Description>

                    <Description title="五大行业解决方案" className="example">
                        <div className="row">
                            {examples.map(({icon, text}, index) => <figure>
                                <img src={`http://static.91convert.com/site/${icon}.png`}
                                     srcSet={`http://static.91convert.com/site/${icon}.png 2x`}/>
                                <figcaption>{text}</figcaption>
                            </figure>)}
                        </div>
                    </Description>

                    <section className="gallery">
                        <Carousel1>
                            <img src="http://static.91convert.com/site/customer2.png"/>
                            <img src="http://static.91convert.com/site/customer3.png"/>
                        </Carousel1>
                    </section>

                    <section className="logos">
                        {
                            logos.map(img => <img key={img} src={'http://static.91convert.com/site/logos/' + img}/>)
                        }
                    </section>

                    <TryNow />
                    <Layer hide={!showVideo} hideLayer={this.hideVideo}>
                        <video preload controls>
                            <source src="http://static.91convert.com/site/video/video-convertlab.mp4"
                                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
                        </video>
                    </Layer>
                </content>
                <Footer/>
            </div>
        );
    }
}