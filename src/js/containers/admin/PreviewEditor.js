/**
 * Created by huangling on 21/05/2017.
 */
/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Button from '../../components/Button';
import { submitForm } from '../../actions/db';
import * as Widgets from '../../components/Widgets';
const Row = Widgets.LabelRow;
import Detail from '../library/Detail';
import Brief from '../library/Brief';
import { getData, deleteData, updateData } from '../../actions/db';


export default class PreviewEditor extends Component {
    componentWillMount() {
        this.state = {
            submmiting: false,
            docs: [],
        };
        this.initData();
        this.getDoc();
    }

    initData = () => {
        this.props.fields.map(field => this.state[field.name] = field.defaultValue || '');
        this.state.docId = null;
        this.setState({ ...this.state });
    };

    getDoc = (id) => {
        if (id) {
            getData('library', id).then(doc => {
                this.props.fields.map(field => this.state[field.name] = doc[field.name]);
                this.state.docId = id;
                this.setState({ ...this.state });
            })
        } else {
            getData('library').then(docs => {
                this.setState({ docs: docs || [] });
            })
        }
    };

    deleteDoc = (id) => {
        deleteData('library', id).then(() => {
            this.getDoc();
            alert(id + ' is deleted!');
        })
    };

    isReadyForSubmit = () => {
        let invalid = false;
        this.props.fields.find(field => {
            const value = this.state[field.name];
            if (field.required && !value) {
                invalid = true;
            }

            if (value && field.valid && !field.valid(value)) {
                invalid = true;
            }
            return invalid;
        });

        return !invalid;
    };


    updateValue = (e, field, error) => {
        field.error = error;
        let value = e.target.value;
        const name = e.target.name;
        if (e.target.type == 'checkbox') {
            const currentValue = this.state[name] || [];
            if (e.target.checked) {
                value = currentValue.concat(value);
            } else {
                value = currentValue.filter(v => v != value);
            }
        }
        this.setState({ [name]: value });
    };

    onSubmit = () => {
        this.setState({ submmiting: true });
        const data = {};
        this.props.fields.forEach(field => {
            data[field.name] = this.state[field.name];
        });
        if (this.state.docId) {
            data.id = this.state.docId;
            updateData('library', data).then(() => {
                alert('更新成功！');
                this.setState({ submmiting: false });
                this.getDoc();
            })
        } else {
            submitForm('library', data).then(() => {
                alert('保存成功！');
                this.setState({ submmiting: false });
                this.getDoc();
            });
        }
    };

    render() {
        const { content = '', detailType, submmiting, docs = [] } = this.state;
        const disabled = !this.isReadyForSubmit();
        const Preview = detailType == 'detail' ? Detail : Brief;

        return (
            <content>
                <section className="direction-row align-start">
                    <div style={{ width: 300, marginRight: 120 }} className="resource-category">
                        <div className="block">

                            <Button onClick={this.initData}>新建</Button>
                            {docs.map(doc => {
                                return (
                                    <div key={doc.id}
                                         style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}>
                                        <span className="title">{doc.title}</span>
                                        <span>{new Date(parseInt(doc.id)).toLocaleString()}</span>
                                        <span className="edit" onClick={() => this.getDoc(doc.id)}>edit</span>
                                        <span className="delete" onClick={() => this.deleteDoc(doc.id)}>delete</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


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

                    <div className="preview markdown">
                        <Preview {...this.state} preview/>
                    </div>
                </section>
            </content>
        );
    }
}