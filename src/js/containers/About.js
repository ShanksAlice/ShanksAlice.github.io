/**
 * Created by huangling on 18/5/2017.
 */
/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QRCode from '../components/QRCode';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const desc1 = [
    'Convertlab营销实验室，最简单的定义就是"营销技术+运营艺术"，通过云端SaaS服务，为您提供一站式营销解决方案。',
    '我们的产品，可以打通各种渠道捕获数据，并从中理解您的客户。在此基础之上，用自动化和个性化的方式与您的客户互动，从而提升客户体验，为企业带来增长。',
];

const desc = [
    '直连客户，建立属于企业自己的流量池。',
    '在直连过程中，建设属于企业自身的用户数据资产。',
    '通过精细化运营，对数据资产进行变现。',
    '衡量一切，建立管理企业营销的科学体系。'
];

const timeLine = [{
    time: '2017.05',
    desc: '荣获虎啸组委会颁发的年度最具潜力新创公司大奖'
},{
    time: '2017.04',
    desc: '获得金鼠标年度最佳数字营销平台奖'
}, {
    time: '2017.02',
    desc: '来自春晓资本的A轮投资'
}, {
    time: '2016.12',
    desc: '超过100个付费客户，初步形成面向金融、品牌和零售、服务行业的解决方案。'
}, {
    time: '2016.08',
    desc: '设立北京、广州、青岛办事处。'
}, {
    time: '2016.06',
    desc: '发布Digital Marketing Hub1.0，成为国内第一个覆盖数据、内容、营销自动化、分析的一站式营销云产品。'
}, {
    time: '2016.03',
    desc: '来自将门创投的Pre-A轮投资'
}, {
    time: '2015.12',
    desc: '获得第一个付费客户。'
}, {
    time: '2015.08',
    desc: '从1200多个团队中脱颖而出，入选微软创投加速器第七期。'
}, {
    time: '2015.07',
    desc: 'Convertlab营销实验室在上海正式成立，同时获得天使投资。'
}];

const whyChooseUs = [{
    icon:'dengpao',
    title: '创新',
    desc: '和我们的客户共同创新，我们更懂中国企业，以及企业营销所面对的外部环境。'
}, {
    icon:'chanpin',
    title: '产品',
    desc: '是国内第一个一站式营销云解决方案，覆盖企业营销所需的各个环节。'
}, {
    icon:'wangzhanchengxu-',
    title: '技术',
    desc: '技术领先，产品融合了我们在大数据、互联网和企业应用三个领域的多年积累和成功经验。'
}, {
    icon:'huanmeihongdexin',
    title: '服务',
    desc: '通过客户成功服务，帮助企业实现最大的商业价值。'
}];

const locations = [{
    title: '上海 SHANGHAI',
    desc: '徐汇区乐山路33号1号楼605室'
}, {
    title: '北京 BEIJING',
    desc: '海淀区海淀大街38号银科大厦815室'
}, {
    title: '广州 GUANGZHOU',
    desc: '天河区体育西路103维多利亚广场B座26楼B05室'
}, {
    title: '深圳 SHENZHEN',
    desc: '南山区科技园南区哈工大A606室'
}, {
    icon: 'ditu',
    title: '青岛 QINGDAO',
    desc: '市北区黑龙江南路2号万科中心C座809室'
}];

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <content>
                    <Landing title="科学和艺术， 在这里汇集" />

                    <Description align='start' vertical="large" title="关于我们" desc={desc1}>
                        <div className="desc row justify-start">
                            我们是专注于营销技术和企业服务的专业团队，曾长期面向全球从事SaaS产品的研发和产品运营。团队来自SAP、Microsoft、IBM、Oracle，以及BAT等公司。
                        </div>
                    </Description>

                    <Description vertical="large" >
                        <div className="time-line">{
                            timeLine.map((stamp, index) => (
                                <div className={"stamp " + (index % 2 === 0 ? 'left' : 'right')} key={index}>
                                    <div className="desc">
                                        <span className="time">{stamp.time}</span>
                                        <div className="text">{stamp.desc}</div>
                                    </div>
                                </div>
                            ))
                        }</div>
                    </Description>

                    <Description align='start' vertical="large" title="我们相信" desc={desc} >
                        <div className="desc row justify-start">
                            Convertlab致力于搭建数字营销枢纽，一站式营销中台。让企业可以从容应对数字营销，让营销变得简单。
                        </div>
                    </Description>


                    <section className="advantage margin-vertical-large">
                        <div className="title justify-start row">为什么选择我们</div>
                        <div className="row align-start list">
                            {
                                whyChooseUs.map((block, index) =>(
                                    <div className="block" key={index}>
                                        <i className={"cl-icons icon-" + block.icon}></i>
                                        <Description title={block.title} desc={block.desc} section={false} />
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="location margin-vertical-large">
                        <div className="title justify-start row">联系我们</div>

                        <div className="contact">
                            <div className="block">
                                <i className="cl-icons icon-dianhua"></i>
                                <div className="desc">
                                    <div className="title">给我们电话</div>
                                    <div className="text">400 850 9918</div>
                                </div>
                            </div>
                            <div className="block">
                                <i className="cl-icons icon-youjian"></i>
                                <div className="desc">
                                    <div className="title">给我们邮件</div>
                                    <div><a className="text" href="mailto:info@convertlab.com">info@convertlab.com</a></div>
                                </div>
                            </div>

                        </div>

                        <div className="row align-start list">
                            {
                                locations.map((location,index) => (
                                    <div className="block" key={index}>
                                        <i className="cl-icons icon-ditu"></i>
                                        <Description {...location} section={false}/>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section>
                        <QRCode />
                    </section>
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}