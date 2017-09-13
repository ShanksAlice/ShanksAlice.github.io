/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import DownloadResource from '../../components/DownloadResource';
import DetailComponent from  '../../components/DetailComponent';

export default class Brief extends DetailComponent {
    render() {
        const { preview, tags = [], fileName, size,  title, linkName} = this.props;

        return (
            <section className="resource-detail">
                <div className="detail">
                    <div className="title row align-center">{title}</div>
                    <div className="tags justify-center">{
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