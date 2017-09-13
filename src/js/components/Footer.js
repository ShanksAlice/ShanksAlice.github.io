/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import Layer from '../components/Layer';
import QRCode from '../components/QRCode';
import { blocks } from '../constants/footer';

export default class Footer extends Component {
    componentWillMount() {
        this.state = {
            showQrCode: false
        }
    }

    showQrCode = (show = true) => {
        this.setState({showQrCode: show})
    };

    render() {
        const { showQrCode } = this.state;
        return (
            <footer className={showQrCode ? 'showLayer' : ''}>
                <div>
                    <div className="row justify-between">
                        <div className="left">
                            <div className="block">
                                <div className="logo">
                                    <img src="http://static.91convert.com/site/logo_footer.png"/>
                                </div>
                            </div>
                            {
                                blocks.map((block, index) => (
                                    <div className="block" key={index}>
                                        {
                                            block.map((link, key) => {
                                                return (
                                                    <a className="link" key={key} href={link.to}>
                                                        {link.label}
                                                    </a>
                                                )
                                            })
                                        }

                                    </div>
                                ))
                            }
                        </div>
                        <div className="contact">
                            <div className="phone"><img src="http://static.91convert.com/site/phone.png"/>400 850 9918</div>
                            <div className="wechat" onClick={this.showQrCode}><img src="http://static.91convert.com/site/weibo.png"/><span>微信公众号</span></div>
                            <a className="weibo" href="http://weibo.com/u/5994921100" target="_blank"><img src="http://static.91convert.com/site/wechat.png"/><span>官方微博</span></a>
                        </div>
                    </div>

                    <div className="copyright">
                        <address>Copyrights © 2017 上海欣兆阳信息科技有限公司</address>
                        <span>备案信息:沪ICP备15038423号-1</span>
                    </div>
                </div>
                <Layer hide={!showQrCode} hideLayer={() => this.showQrCode(false)}>
                    <QRCode />
                </Layer>
            </footer>
        );
    }
}