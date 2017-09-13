/**
 * Created by huangling on 20/05/2017.
 */
import React, {Component} from 'react';

export default class Breadcrumb extends Component {
    render() {
        const { links } = this.props;
        let breadcrumb = links.reduce((pre, current, index) => {
            current.className = 'breadcrumb-link';
            pre.push(current);
            if (index < links.length - 1) {
                pre.push({className: 'split', label: '>'});
            }
            return pre;
        }, []);

        return (
            <div className="breadcrumb">
                {breadcrumb.map(({className, to, label}, index) => {
                    if (to) {
                        return <a className={className} href={to} key={index}>{label}</a>;
                    } else {
                        return <div className={className} key={index}>{label}</div>
                    }
                })}
            </div>
        );
    }
}