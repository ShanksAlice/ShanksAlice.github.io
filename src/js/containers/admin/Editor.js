import React, {Component} from 'react';
import Button from '../../components/Button';
import {submitForm} from '../../actions/db';
import * as Widgets from '../../components/Widgets';
const Row = Widgets.LabelRow;

export default class PreviewEditor extends Component {
    componentWillMount() {
        this.state= {
            submmiting: false
        };
        this.props.fields.map(field => this.state[field.name] = '');
    }

    isReadyForSubmit = () => {
        let invalid = false;
        this.props.fields.find(field => {
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
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = () => {
        this.setState({submmiting: true});
        const data = {};
        this.props.fields.forEach(field => {
            data[field.name] = this.state[field.name];
        });
        submitForm(this.props.type, data).then(() => {
            alert('保存成功！');
            this.setState({submmiting: false});
        });
    };

    render() {
        const { tag, content = '', detailType, submmiting} = this.state;
        const disabled = !this.isReadyForSubmit();

        return (
            <content>
                <section className="direction-row">
                    <div className="form">
                        {this.props.fields.map(field => {
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
                            <Button disabled={disabled || submmiting} length="large"
                                    className="submit-btn"
                                    onClick={this.onSubmit}
                                    text="提交"/>
                        </Row>
                    </div>
                </section>
            </content>
        );
    }
}