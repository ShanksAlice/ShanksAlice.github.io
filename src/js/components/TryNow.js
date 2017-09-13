/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import SubmitEmail from './SubmitEmail';

export default class TryNow extends Component {
    render() {
        const { children } = this.props;
        return (
            <section className="try-now">
                <div className="title row">立即申请免费试用</div>
                {children || <SubmitEmail btnText='申请试用' />}
            </section>
        );
    }
}