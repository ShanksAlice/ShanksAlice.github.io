/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import DownloadResource from '../../components/DownloadResource';
import DetailComponent from '../../components/DetailComponent';


export default class Detail extends DetailComponent {
    render() {
        const { preview, tags = [], fileName, size, img = 'resource_cover.png', title, linkName} = this.props;
        return (
            <section className="resource-detail">
                {!preview && <div className="img">
                    <img src={img.indexOf('//') > -1 ? img : `http://static.91convert.com/site/${img}`}/>
                </div>
                }

                <div className="detail">
                    <div className="title">{title}</div>
                    <div className="tags">{
                        tags.map((tag, index)=> <div className="tag" key={index}>{tag}</div>)
                    }</div>
                    <div className="content markdown" ref={node => this.content = node}/>
                    <div className="highlight bold">{fileName}</div>
                    <div className="highlight">{size}</div>

                    {!preview && linkName && <DownloadResource linkName={linkName}/>}
                </div>

            </section>
        );
    }
}

