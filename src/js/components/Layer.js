/**
 * Created by huangling on 20/05/2017.
 */

import React, {Component} from 'react';
import { disableScroll, enableScroll } from '../actions/scroll';

export default class Layer extends Component {
    hide = () => {
        this.layer.style.display = 'none';
        enableScroll();
        this.props.hideLayer();
    };

    childClick = (e) => {
        e.stopPropagation();
    };

    render () {
        const { hide, color } = this.props;
        if (!hide) {
            disableScroll();
        }
        return (
            <div className="layer"
                 ref={node => this.layer = node}
                 style={{display: hide ? 'none' : 'flex'}}
                 onClick={this.hide}>
                <div className={"layer-container " + color}>
                    <div className="layer-children" onClick={this.childClick}>
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}