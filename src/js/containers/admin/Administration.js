/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Footer from '../../components/Footer';
import PreviewEditor from './PreviewEditor'
import UpdateEditor from './SubOptionEditor'
import {editLinks} from '../../constants/header';
import * as FORMS from '../../constants/editorForms';

export default class Resource extends Component {
    componentWillMount() {
        this.state = {
            editor: 'PreviewEditor',
            data: 'library',
            formIndex: 6
        };
    }

    render() {
        const {editor, data, formIndex } = this.state;
        const fields = FORMS[data];
        return (
            <div>
                <nav id="nav">{
                    editLinks.map((link, index) => (
                        <div className={formIndex == index ? 'active nav-item' : 'nav-item'}
                             style={{color: '#0acacb'}}
                             onClick={() => {
                                 this.setState({
                                     editor: link.editor,
                                     data: link.data,
                                     formIndex: index
                                 })
                             }}
                             key={index}>
                            {link.label}
                        </div>
                    ))
                }</nav>
                {fields && editor === 'PreviewEditor' && <PreviewEditor fields={fields}/>}
                {fields && editor === 'UpdateEditor' && <UpdateEditor fields={fields}/>}
                <Footer/>
            </div>
        );
    }
}