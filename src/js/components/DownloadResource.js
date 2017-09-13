/**
 * Created by huangling on 18/5/2017.
 */
/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import SubmitEmail from './SubmitEmail';
import {ContainerBlock} from './ContainerBlock';

export default class DownloadResource extends Component {
    render() {
        return (
            <ContainerBlock>
                <div className="title">免费获取</div>
                <div className="desc">获取这份材料的PDF版本，还有很多干货内容尽在Convertlab。</div>
                <div className="desc">告诉我您的邮箱，我们会第一时间把资料发送到给您。</div>
                <SubmitEmail btnText="获取文件" color="theme" length="medium" from="doc" linkName={this.props.linkName}/>
            </ContainerBlock>
        );
    }
}