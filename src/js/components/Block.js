/**
 * Created by huangling on 04/06/2017.
 */
import React, {Component} from 'react';
import Description from './Description';

export default class Block extends Component {
    render () {
        const { icon, align = '', children, descAlign = '', title, desc, } = this.props;

        let Icon;
        if (typeof icon == 'object') {
            Icon = icon;
        } else {
            Icon = <i className={'cl-icons icon-' + icon}></i>;
        }
        return (
            <div className={"block align-" + align}>
                {Icon}
                <Description title={title} desc={desc} section={false} align={descAlign}/>
                {children}
            </div>
        );
    }
}