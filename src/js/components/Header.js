/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';
import Button from '../components/Button';
import { links } from '../constants/header';
import Link from '../components/Link';

export default class Header extends Component {
    componentWillMount() {
        this.links = this.props.links || links;
        this.state = {
            color: this.props.color
        };
    }

    componentDidMount() {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }

        window.addEventListener('scroll', this.scroll)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({color: nextProps.color});
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            this.setState({color: 'white'});

        } else {
            this.setState({color: this.props.color});
        }
        
    };

    toggleNav = () => {
        if (this.nav.style.display == 'flex') {
            this.nav.style.display = 'none';
        } else {
            this.nav.style.display = 'flex';
        }

    };

    render() {
        const { color=''} = this.state;
        const { short } = this.props;
        return (
            <header ref={node => this.head = node} className={color + (short? ' short' : '')}>
                <div>
                
                    <a className='logo' href="/home">
                        <img ref={node => this.img1 = node} src="http://static.91convert.com/site/logo.png" style={{display: color !== 'white' ? 'block' : 'none'}}/>
                        <img ref={node => this.img2 = node} src="http://static.91convert.com/site/logo_theme.png"  style={{display: color === 'white' ? 'block' : 'none'}}/>
                    </a>
                   
                    <div className="nav" onClick={this.toggleNav}/>
                    <nav id="nav" ref={node => this.nav = node}>
                       <p className="times" onClick={this.toggleNav}> &times;</p>       
                        {
                            this.links.map((link, index) =>{
                                return (
                                    <Link className='nav-item' key={index} href={link.to}>{link.label}</Link>
                                )
                            })
                        }
                        <Button isLink type="blank" color='white' target="_blank" fontSize="small"
                                href="https://app.convertlab.com/login.html">账号登录</Button>
                    </nav>
                </div>
            </header>
        );
    }
}
