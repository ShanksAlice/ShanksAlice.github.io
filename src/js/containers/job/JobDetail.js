import React, { Component } from 'react';
import { ContainerBlock } from '../../components/ContainerBlock';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import { jobMap } from '../../constants/joinUs';

export default class JobDetail extends Component {
    componentDidMount() {
        const search = this.props.location.search;
        if (!search) {
            location.href = '/NotFound';
        }
    }

    render() {
        const search = this.props.location.search;
        if (!search) {
            return null;
        }

        const id = search.substr(1);
        if (!jobMap[id]) {
            return null;
        }
        const { details, title, jobLocation = '上海' } = jobMap[id];
        return (
            <div>
                <Header color="white"/>
                <content>
                    <section className="job-detail">

                        <Breadcrumb links={
                            [{to: '/join', label: '上一页'},{label: title}
                            ]}/>

                        <div className="title justify-between row">{title}</div>
                        <div className="location">{jobLocation}</div>
                        <div className="detail">
                            {
                                details.map(({ title, items }, index) => (
                                    <div className="block" key={index}>
                                        <div className="title">{title}</div>
                                        {items.map((item, index) => <li className="item" key={index}>{item}</li>)}
                                    </div>
                                ))
                            }
                        </div>
                        <ContainerBlock className="justify-between direction-row">
                            <div>
                                <div className="title">现在申请这个职位</div>
                                <div className="desc">给我们发送邮件，附上你的个人简历，记得注明职位名称哦～</div>
                            </div>
                            <Button isLink href="mailto:hr@convertlab.com">申请岗位</Button>
                        </ContainerBlock>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}

