/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Button from '../components/Button';
import * as Widgets from '../components/Widgets';
import { formData } from '../constants/submitForm';
import { getParamsMap } from '../actions/db';
import Form from './Form';

const Row = Widgets.LabelRow;

export default class SubmitForm extends Component {

    render() {

        return (
            <div>
                <Header color='white' short/>
                <content>
                    <Landing/>
                    <Description title="填写以下信息，试用Digital Marketing Hub" />
                    <section>
                        <Form location={this.props.location}/>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}