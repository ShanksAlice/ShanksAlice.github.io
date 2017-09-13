/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getData, liked } from '../actions/db';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import { setCookie, getCookie } from '../actions/utils';
import { LIKEED } from '../constants/utils';
import { markdown } from 'markdown';

class TimeStamp extends Component {
    like = (id) => {
        const data = JSON.parse(getCookie(LIKEED) || '{}');
        const likeId = this.props.id + '_' + id;

        if (!data[likeId]) {
            this.likeBtn.style.transform = 'rotateZ(15deg)';
            this.likeBtn.classList.add('active');
            setTimeout(() => {
                this.likeBtn.style.transform = '';
            }, 200);


            data[likeId] = true;
            setCookie(LIKEED, JSON.stringify(data));

            liked(this.props.id, id).then(() => {
                this.props.update();
            })
        }
    };

    render() {
        const { publishDate, title, briefs, desc, active, onMore, id, details = [] } = this.props;
        const classes = ['stamp', 'left'];
        if (!active) {
            classes.push('disabled');
        }

        return (
            <div className={classes.join(' ')}>
                <span className="time" onClick={onMore}>{publishDate}</span>
                <div className="text-block">
                    <div className="title">{title}</div>
                    {active ?
                        <div>
                            <p>{briefs}</p>
                            <br/>
                            <p>{desc}</p>

                            {details.map((detail, key) => {
                                const { title, desc, link, img = 'btn_icon_01.png', name, jobTitle, likeCount = 0 } = detail;
                                let liked = false;
                                const likeObj = JSON.parse(getCookie(LIKEED) || '{}');
                                const likeId = id + '_' + detail.id;
                                if (likeObj[likeId]) {
                                    liked = true;
                                }
                                return (
                                    <div className="row direction-row align-start" key={key}>
                                        <div className="badge">
                                            <div className="avatar">
                                                <img
                                                    src={img.indexOf('//') > -1 ? img : `http://static.91convert.com/site/${img}`}/>
                                            </div>
                                            <div className="name">{name}</div>
                                            <div className="job-title">{jobTitle}</div>
                                        </div>
                                        <div className="detail-desc">
                                            {/*
                                            <i className="name">{name}</i>
                                            <i className="job-title">{jobTitle}</i>
                                            */}
                                            <div className="sub-title">{title}</div>
                                            <p className="markdown"
                                               dangerouslySetInnerHTML={{ __html: markdown.toHTML(desc) }}/>
                                            {link && <a className="more arrow2" href={link} target="_blank">更多详情</a>}
                                            <div className="like">
                                                <i className={'cl-icons icon-zan ' + (liked ? 'active' : '')}
                                                   onClick={() => this.like(detail.id)}
                                                   ref={node => this.likeBtn = node}/>
                                                <span className="num">{likeCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> :
                        <div className="detail-desc">
                            <div className="desc">{briefs}</div>
                            <a className="more arrow" onClick={onMore}>了解更多</a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default class Update extends Component {
    componentWillMount() {

        this.state = {
            data: [],
            activeItem: ''
        };

        this.getUpdateInfoData();
    }

    getUpdateInfoData = () => {
        getData('updateInfo').then(data => {
            const timeLine = data.sort((a1, a2) => new Date(a2.publishDate).getTime() - new Date(a1.publishDate).getTime());
            const activeItem = this.state.activeItem || (timeLine.length > 0 ? timeLine[0].id : '');
            this.setState({ data: timeLine, activeItem });
        })
    };

    render() {
        const { data, activeItem } = this.state;
        return (
            <div>
                <Header/>
                <content>
                    <Landing title="产品更新" desc="我们一直在进步..."/>

                    <section className="update-info margin-vertical-large">
                        <div className="time-line-2">
                            {
                                data.map((d, key) => (
                                    <TimeStamp {...d} key={key}
                                               onMore={() => this.setState({ activeItem: d.id })}
                                               active={activeItem == d.id}
                                               update={this.getUpdateInfoData}
                                    />
                                ))
                            }
                        </div>
                    </section>
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}