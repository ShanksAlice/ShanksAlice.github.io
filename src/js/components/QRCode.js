/**
 * Created by huangling on 20/05/2017.
 */
import React, { Component } from 'react';

const a = (j) => {
    var h = j + '=';
    var g = document.cookie.split(';');
    for (var k = 0; k < g.length; k++) {
        var l = g[k];
        while (l.charAt(0) == ' ') {
            l = l.substring(1)
        }
        if (l.indexOf(h) == 0) {
            return l.substring(h.length, l.length)
        }
    }
    return ''
};

const src = '//host.convertlab.com/qrcode/binding?uuid=9c6249981f9445c5903ee737274f9088&tid=1238467299&utma=';
export default class QRCode extends Component {
    componentDidMount() {
        this.img.setAttribute('src',  src + a('c__utma'));
    }

    render() {
        const { hideLine } = this.props;
        return (
            <div className="QR-code">
                {!hideLine &&
                <div className="line">
                    <label className="desc"><span>了解最新动态</span></label>
                </div>
                }
                <div className="img"><img ref={node => this.img = node}/></div>
                <div>扫码关注我们</div>
            </div>
        );
    }
}
