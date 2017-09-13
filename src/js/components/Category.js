/**
* Created by huangling on 14/05/2017.
*/

import React, {Component} from 'react';

export default class Category extends Component {
    componentWillMount() {
        this.blocks = [{
            title: '人&数据',
            desc: '全渠道打通，接入客户的浏览数据、行为数据、消费数据、资料数据、消费相关的商品数据。对接入数据进行建模分析，绘制出每一个客户的360度画像。',
            img: 'people'
        }, {
            title: '内容&交互',
            desc: '通过低使用门栏的内容制作工具，快速生产营销内容和物料，覆盖微信、短信、邮件、微页面等多种形式。用户与内容交互后，数据自动被收集。',
            img: 'engage'
        }, {
            title: '策略&自动化',
            desc: '所见即所得的自动流程设计器，可以让你的运营策略简单快速的变成机器可以读懂的命令，从而程序化执行并输出执行报表。大大提高运营效率。',
            img: 'automation'
        }];
    }

    render() {
        return (
            <section className="category justify-between direction-row">
                {
                    this.blocks.map((block, index) => {
                        return (
                            <div className="block" key={index}>
                                <figure>
                                    <img src={`http://static.91convert.com/site/${block.img}.png`}/>
                                </figure>
                                <div className="title">{block.title}</div>
                                <div className="desc">{block.desc}</div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}
