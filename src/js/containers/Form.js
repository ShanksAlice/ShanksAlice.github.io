/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Button from '../components/Button';
import * as Widgets from '../components/Widgets';
import { formData } from '../constants/submitForm';
import { getParamsMap } from '../actions/db';

const Row = Widgets.LabelRow;

export default class SubmitForm extends Component {
    componentWillMount() {
        this.state = {};
        this.paramsMap = getParamsMap(this.props.location.hash, 'hash');
        formData.map(field => {
            this.state[field.name] = this.paramsMap[field.name] || '';
        });
    }

    componentDidMount() {
        _clForm.loadForm("http://host.convertlab.com", "ffb9d84d96ea4b21937772c07a8efc22", {
            onSubmit: function (args) {
                location.href = '/formSubmitted'
            }
        });
    }

    isReadyForSubmit = () => {
        let invalid = false;
        formData.find(field => {
            const value = this.state[field.name];
            if (field.required && !value) {
                invalid = true;
            }

            if (field.valid && !field.valid(value)) {
                invalid = true;
            }
            return invalid;
        });

        return !invalid;
    };

    updateValue = (e, field, error) => {
        field.error = error;
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const disabled = !this.isReadyForSubmit();

        return (
            <form id="clForm" data-cl-attached="true" data-cl-id="ffb9d84d96ea4b21937772c07a8efc22"
                  action="http://host.convertlab.com/form/ffb9d84d96ea4b21937772c07a8efc22" method="POST"
                  onSubmit={this.onSubmit} className="form"
            >
                {formData.map(field => {
                    const Comp = Widgets[field.type];
                    const value = this.state[field.name];
                    return (
                        <Comp {...field} key={field.name}
                              error={field.error}
                              value={value}
                              onBlur={(e) => {
                                  this.updateValue(e, field, value && field.valid && !field.valid(value) && field.hint)
                              }}
                              onChange={(e) => this.updateValue(e, field)}/>
                    );
                })}
                <Row>
                    <Button disabled={disabled} length="large" id="clSubmitForm"
                            className="submit-btn" text="提 交"/>
                </Row>
            </form>
        );
    }
}