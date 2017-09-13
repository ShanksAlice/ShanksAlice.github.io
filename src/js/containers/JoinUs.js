/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import {
    welfare,
    jobs,
} from '../constants/joinUs';

export default class JoinUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <content>
                    <Landing title="和我们一起工作" desc="我们一直在进步..."/>

                    <section className=" margin-vertical-large">
                        <div className="job-info">
                            {jobs.map(({category, img, items}, index) => (
                                <div className="block" key={index}>
                                    <div className="title">
                                        <i className={"cl-icons icon-" + img}/>
                                        <span>{category}</span>
                                    </div>
                                    <div className="job-list">
                                        {items.map(({title, desc, id},index) => (
                                            <div className="job-item" key={index}>
                                                <a className="more" href={'/jobDetail?' + id}>
                                                    {title}
                                                </a>
                                                <div>{desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Description title="员工福利" desc="我们提供了富有竞争力的员工福利和上升空间。 "/>

                    <section className="category justify-between direction-row text-align-center">
                        {welfare.map(({img, title, desc}, index) => (
                            <div className="block" key={index}>
                                <i className={"cl-icons icon-" + img}/>
                                <div className="title">{title}</div>
                                <div className="desc">{desc}</div>
                            </div>
                        ))}
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}