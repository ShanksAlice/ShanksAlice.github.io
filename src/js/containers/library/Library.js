/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import {getData } from '../../actions/db';
import Landing from '../../components/Landing';
import Description from '../../components/Description';
import Detail from './Detail';
import Brief from './Brief';
import TryNow from '../../components/TryNow';
import Breadcrumb from '../../components/Breadcrumb';
import { nav } from '../../constants/library';
import { markdown } from 'markdown';

const Book = (props) => (
    <div className="block-book">
        <img className="img" src={props.src}/>
        <Description title={props.title} desc={props.tag || ' '} section={false}/>
    </div>
);

export default class Resource extends Component {
  componentWillMount() {
        const Nav = nav.map((item)=> {item.visibilty = false;return item;});
        this.state = {
            docs: [],
            filterValue: '',
            filterKey: '',
            doc: null,
            nav:Nav
        };

        this.getDoc(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search != this.props.location.search) {
            this.getDoc(nextProps);
        }
    }

    getDoc = (props) => {
        let id = props.location.search;
        if (id) {
            id = id.substr(1);
            getData('library', id).then(doc => {
                this.setState({doc});
            })
        } else {
            if (this.state.docs.length > 0) {
                this.setState({doc: null});
            } else {
                getData('library', id).then(docs => {
                    this.setState({docs: docs || [], doc: null});
                })
            }
        }
    };

    toggleContent =(index)=>{
        // console.log("index",index)
        const {nav} = this.state;
        nav[index].visibilty = !nav[index].visibilty;
        this.setState({
            nav
        });
        // this.setState((pre)=>({visibilty:!pre.visibilty}),()=>console.log(this.state.visibilty))

    }


    filter = (filterKey, filterValue) => this.setState({ filterValue, filterKey });

    render() {
        const { docs = [], filterKey, filterValue, doc, toggleContent ,nav} = this.state;
        // console.log(nav)
        const filteredDoc = docs.filter(doc => {
            if (!filterKey) {
                return true;
            } else if (filterValue === '全部'){
                return true;
            } else if (typeof doc[filterKey] == 'string') {
                return doc[filterKey] == filterValue;
            } else {
                return doc[filterKey].indexOf(filterValue) > -1;
            }
        });

        let DetailPage;
        if (doc) {
            DetailPage = doc.detailType === 'detail' ? Detail : Brief;
        }
        return (
            <div>
                <Header color={doc ? 'primary' : ''} short={Boolean(doc)}/>
                    <content>
                        <Landing title="免费的营销资源"/>

                        {doc && <Breadcrumb links={
                            [{to: '/library', label: '资源列表'},{label: doc.title}
                        ]}/>}

                        {doc ? <DetailPage {...doc} />
                            :
                            <section className="resource">
                                <div className="resource-category">
                                    {nav.map((block, index) => (
                                        <div className="block" key={index}>
                                            <div className="title" onClick={this.toggleContent.bind(this,index)}> {block.title}</div>
                                            <div className="links" style={{display:(!block.visibilty?"none":"block")}}>
                                                {block.items.map((item, index) => {
                                                    let className = 'item';
                                                    if (item == filterValue) {
                                                        className += ' active '
                                                    }
                                                    return (
                                                        <div key={index} className={className}
                                                             onClick={() => this.filter(block.key, item)}>
                                                            <span >{item}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={"books " + (filteredDoc.length > 0 ? '' : 'placeholder')}>
                                    {filteredDoc.map(({id, img, title, tags = []}) => (
                                        <a key={id} href={`/library${id ? ('?' + id + '') : ''}`}>
                                            <Book src={img.indexOf('//') > -1 ? img : `http://static.91convert.com/site/${img}`}
                                                  title={title} tag={tags.slice(0, 3).join(' ')}
                                            />
                                        </a>
                                    ))}
                                    <img className="placeholder-img" src="http://static.91convert.com/site/placeholder.png"
                                         srcSet="http://static.91convert.com/site/placeholder.png 2x"/>
                                    <div className="placeholder-text">我们正在努力生产中...</div>
                                </div>
                            </section>
                        }
                        <TryNow>
                            {doc && <a href='/form'><Button color="orange">提交申请</Button></a>}
                        </TryNow>
                    </content>

                <Footer/>
            </div>
        );
    }
}