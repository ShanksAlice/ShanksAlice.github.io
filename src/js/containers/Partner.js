/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import Button from '../components/Button';

const Block = (props) => {
    const { icon, title, desc, num } = props;
    return (
        <div className="block">
            <i data-num={num} className={'cl-icons icon-' + icon}></i>
            <Description title={title} desc={desc} section={false}/>
        </div>
    );
};

const Block_img_up = (props) => {
    const { icon, title, align = 'start', desc, children, image } = props;
    const img = icon ? <i className={'cl-icons icon-' + icon}></i> : <img className="avatar" src={"http://static.91convert.com/site/" + image}/>
    return (
        <div className={"block vertical align-" + align}>
            {img}
            <Description title={title} desc={desc} section={false}/>
            {children}
        </div>
    );
};

const Block_location = (props) => {
    const { title, desc, name, email } = props;
    return (
        <div className="block">
            <i className="cl-icons icon-ditu"></i>
            <Description title={title} desc={desc} section={false}/>
            <div className="name-tag align-start">
                <div className="name">{name}</div>
                <div className="job-title">{email}</div>
            </div>
        </div>
    );
};

export default class Partner extends Component {
    render() {
        return (
            <div className="join-us" >
                <Header/>
                <content>
                    <Landing title="和我们一起工作" desc="我们一直在进步..."/>

                    <Description title="为什么加入我们" desc=""/>

                    <section className="how-to-join">
                        <Block icon='chuan' title="蓝海市场" desc="超过4000万企业端市场，解决企业营销痛点，助力企业互联网+,万亿级蓝海市场。"/>
                        <Block icon='qianduankaifa' title="专业产品研发" desc="一线科技公司成员团队，致力于为企业提供立体化的服务和技术。10年行业经验积累。"/>
                        <Block icon='layers' title="立体市场布局" desc="渠道经理驻地支持，强有力的实战指导、协同谈单及团队培训，良好的售后支持及产品、技术快速响应。"/>
                        <Block icon='shangsheng' title="持续收益"
                               desc="SaaS模式，丰富的套餐组合，持续性的经济收益。让利于合作伙伴，实现客户永续分成，保证充足利润空间。"/>
                    </section>

                    <div className="row">
                        <Button isLink type='blank' padding="large" href="mailto:info@convertlab.com">成为我们的合作伙伴</Button>
                    </div>

                    <Description title="我们提供全方位的支持" />

                    <section className="category justify-between direction-row">
                        <Block_img_up
                            icon="chanpin"
                            title="产品支持"
                            desc="战略目标制定，阶段目标协助执行，定期优秀运营案例分享。"
                        />

                        <Block_img_up
                            icon="yunyingshuju"
                            title="运营支持"
                            desc="专项市场费用、共享品牌投放效益、宣传物料支持，展会活动支持，行业合作撮合。"
                        />

                        <Block_img_up
                            icon="jiaoyishichang"
                            title="市场支持"
                            desc="灵活的销售策略、客户特惠福利，销售返点、促销支持，售前指导、协助公关。"
                        />

                        <Block_img_up
                            icon="zhenduishichang"
                            title="销售支持"
                            desc="全方位产品功能详解、产品应用场景解析，销售经验分享、销售话术、市场建议。"
                        />

                        <Block_img_up
                            icon="peixun"
                            title="培训支持"
                            desc="强大的售后团队、高效反馈机制、技术响应。"
                        />

                        <Block_img_up
                            icon="shouhou1"
                            title="售后支持"
                            desc="每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死"
                        />
                    </section>

                    <Description title="合作伙伴说"/>

                    <section className="category justify-between direction-row text-align-center">
                        <Block_img_up align="center"
                            image="partner_face.png"
                            desc="Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。 拷贝"
                        >
                            <div className="name-tag">
                                <div className="name">刘德华</div>
                                <div className="job-title">华谊嘉信 渠道总监</div>
                            </div>
                        </Block_img_up>

                        <Block_img_up align="center"
                                      image="partner_face.png"
                                      desc="Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。 拷贝"
                        >
                            <div className="name-tag">
                                <div className="name">刘德华</div>
                                <div className="job-title">华谊嘉信 渠道总监</div>
                            </div>
                        </Block_img_up>

                        <Block_img_up align="center"
                                      image="partner_face.png"
                                      desc="Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。 拷贝"
                        >
                            <div className="name-tag">
                                <div className="name">刘德华</div>
                                <div className="job-title">华谊嘉信 渠道总监</div>
                            </div>
                        </Block_img_up>
                    </section>

                    <Description title="怎样加入合作伙伴计划"/>

                    <section className="how-to-join">
                        <Block icon="number" num="1" title="提交加盟申请"/>

                        <Block icon="number" num="2" title="审核信息并回访" />

                        <Block icon="number" num="3" title="签约" />

                        <Block icon="number" num="4" title="发放代理证书" />
                    </section>

                    <section className="location margin-vertical-large">
                        <div className="title row">联系我们</div>

                        <div className="row align-start list center">
                            <Block_location title="华东 EAST CHINA"
                                            desc="徐汇区乐山路33号1号楼605室"
                                            name="沈兰兰"
                                            email="partner@convertlab.com" />

                            <Block_location title="华北 NORTH CHINA"
                                            desc="海淀区海淀大街38号银科大厦815室"
                                            name="杨东"
                                            email="partner@convertlab.com" />

                            <Block_location title="华南 SOUTH CHINA"
                                            desc="广州市天河区体育西路102维多利亚广场B座26座B05室"
                                            name="王雄杰"
                                            email="partner@convertlab.com" />

                            <Block_location title="山东 SHANGDONG"
                                            desc="青岛市市北区黑龙江南路2号万科中心C座809"
                                            name="李石泉"
                                            email="partner@convertlab.com" />

                        </div>
                    </section>

                    <TryNow>
                        <Button isLink color="orange" href="mailto:partner@convertlab.com">提交申请</Button>
                    </TryNow>
                </content>
                <Footer/>
            </div>
        );
    }
}