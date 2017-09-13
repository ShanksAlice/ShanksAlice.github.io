/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import QRCode from '../components/QRCode';
import Footer from '../components/Footer';
import Form from '../containers/Form';
import { getParamsMap } from '../actions/db';

const normalState = {
    title: '感谢您的提交，我们将在2个工作日内和您取得联系。',
    img: 'success.png',
    splitterText: '关注我们的公众号， 及时了解动态',
    type: 'normal'
};

const fromDoc = {
    title: '我们已经将资源下载链接发送到您的邮箱，请打开邮箱查看',
    img: 'emailSubmitted.png',
    splitterText: '免费试用Digital Marketing Hub',
    type: 'fromDoc'
};

export default class SubmitSuccess extends Component {
    componentWillMount() {
        const paramsMap = getParamsMap(this.props.location.hash, 'hash');

        this.state = paramsMap.from == 'doc' ? fromDoc : normalState;
    }

    scroll = () => {
        window.scrollTo(0, 751);
    };

    render() {
        const { title, img, splitterText, type } = this.state;

        return (
            <div >
                <Header color='white' short />
                <content className="submit-success">
                    <section>
                        <img src={`http://static.91convert.com/site/${img}`}
                            srcSet={`http://static.91convert.com/site/${img} 2x`} />
                        <div className="title">{title}</div>
                        <div className="section-spliter">
                            <div className="line">
                                <label className="desc"><span>{splitterText}</span></label>
                            </div>
                            <div className="next" onClick={this.scroll} />
                        </div>
                    </section>
                    <section>
                        {type == 'normal' ? <QRCode hideLine /> : <Form location={this.props.location} />}
                    </section>
                </content>
                <Footer />
            </div>
        );
    }
}