/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';

export default class Landing extends Component {
    componentDidMount() {
        // this.img2.style.display = 'none';
        // window.addEventListener('scroll', () => {
        //     if (document.body.scrollTop > 0) {
        //         this.head.classList.add('scrolled');
        //         this.img1.style.display = 'none';
        //         this.img2.style.display = 'block';
        //     } else {
        //         this.head.classList.remove('scrolled');
        //         this.img2.style.display = 'none';
        //         this.img1.style.display = 'block';
        //     }
        // })
    }

    render() {
        const { title, desc, children, className = '', backgroudImg='sub_banner_bg'}  = this.props;
        return (
            <section className={"landing " + className}>
                <img className="background" src={`http://static.91convert.com/site/${backgroudImg}.png`}/>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                {children}
            </section>
        )
    }
}
