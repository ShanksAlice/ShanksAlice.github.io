/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import DownloadResource from './DownloadResource';
import { markdown } from 'markdown';


export default class DetailComponent extends Component {
    componentDidMount() {
        this.showContent();
    }

    componentDidUpdate() {
        this.showContent();
    }

    showContent = () => {
        const { content, contentType = 'markdown'} = this.props;
        if (contentType === 'markdown') {
            this.content.innerHTML = markdown.toHTML(content);
        } else {
            this.content.innerHTML = content.replace(/&lt;/g, '<').replace(/&gt;/g,'>');
        }
    };
}

