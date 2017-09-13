/**
* Created by huangling on 14/05/2017.
*/

import React, {Component} from 'react';

export default class Description extends Component {
    render () {
        const { title, desc, children, className, short, align = '', vertical='', section = true} = this.props;
        let descComp;
        if (desc instanceof Array) {
            descComp = desc.map((d, i) => <div key={i} className="desc">{d}</div>)
        } else {
            descComp = <div className="desc">{desc}</div>;
        }

        const classes = "description " + className + ' text-align-' + align + ' margin-vertical-' + vertical;

        if (section) {
            return (
                <section className={classes}>
                    <div className='title row'>{title}</div>
                    {descComp}
                    {children}
                </section>
            );
        } else {
            const textAlign = align || 'start';
            return (
                <div>
                    <div className={"title ellipsis text-align-" + textAlign} title={title}>{title}</div>
                    <div className="desc">{desc}</div>
                </div>
            );
        }
    }
}