/**
 * Created by huangling on 26/05/2017.
 */
import React, {Component} from 'react';

export default class Link extends Component {
    componentWillMount() {
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        this.setState({active: location.pathname == this.props.href});
    }

    render() {
        const classes = [this.props.className];
        if (this.state.active) {
            classes.push('active');
        }


        return (
            <a {...this.props} className={classes.join(' ')}/>
        );
    }
}
