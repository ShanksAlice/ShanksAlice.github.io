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
import { getData, deleteData, updateData } from '../../actions/db';

export default class SubOptionEditor extends Component {
    componentWillMount() {
        this.state = {
            submmiting: false,
            fields: this.props.fields,
            updateInfoId: null,
            updateInfoList: []
        };
        this.initData();
        this.getUpdateInfo();
    }

    initData = () => {
        this.props.fields.map(field => this.state[field.name] = field.defaultValue || '');
        this.state.updateInfoId = '';
        this.setState({ ...this.state });
    };

    getUpdateInfo = (id) => {
        if (id) {
            getData('updateInfo', id).then(doc => {
                this.props.fields.map(field => {
                    if (field.type == 'LabelAddForm') {
                        this.state[field.name] = doc[field.name].reduce((pre, valueObj, index) => {
                            return pre.concat(field.form.map((f) => {
                                const name = f.name + '_' + (index + 1);
                                this.state[name] = valueObj[f.name];
                                return {
                                    ...f,
                                    title: f.title + '_' + (index + 1),
                                    name,
                                    value: valueObj[f.name]
                                }
                            }))
                        }, [])
                    } else {
                        this.state[field.name] = doc[field.name];
                    }
                });
                this.state.updateInfoId = id;
                this.setState({ ...this.state });
            })
        } else {
            getData('updateInfo').then(updateInfoList => {
                this.setState({ updateInfoList: updateInfoList || [] });
            })
        }
    };

    deleteInfo = (id) => {
        deleteData('updateInfo', id).then(() => {
            this.getUpdateInfo();
            alert(id + ' is deleted!');
        })
    };

    isReadyForSubmit = () => {
        let invalid = false;
        this.props.fields.find(field => {
            const value = this.state[field.name];

            if (value instanceof Array) {
                invalid = value.find(v => (v.required && !this.state[v.name]) || (v.valid && !v.valid(v)));
            } else {
                invalid = (field.required && !value) || (field.valid && !field.valid(value));
            }
            return invalid;
        });

        return !invalid;
    };


    updateValue = (e, field, error) => {
        field.error = error;
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = () => {
        this.setState({ submmiting: true });
        const subKey = [];
        const data = {};
        this.props.fields.forEach(field => {
            if (field.type == 'LabelAddForm') {
                subKey.push(field.name);
            } else {
                data[field.name] = this.state[field.name];
            }
        });

        subKey.forEach(item => {
            const detailItem = this.state[item];
            if (detailItem) {
                data[item] = [];
                detailItem.forEach(f => {
                    const [key, indexStr] = f.name.split('_');
                    const index = indexStr - 1;
                    if (!data[item][index]) {
                        data[item][index] = { id: f.name };
                    }

                    data[item][index][key] = this.state[f.name];
                });
            }
        });

        if (this.state.updateInfoId) {
            data.id = this.state.updateInfoId;
            updateData('updateInfo', data).then(() => {
                alert('更新成功！');
                this.setState({ submmiting: false });
                this.getUpdateInfo();
            })
        } else {
            submitForm('updateInfo', data).then(() => {
                alert('保存成功！');
                this.setState({ submmiting: false });
                this.getUpdateInfo();
            });
        }
    };

    render() {
        const { submmiting, updateInfoList } = this.state;
        const disabled = !this.isReadyForSubmit();

        return (
            <content>
                <section className="direction-row">

                    <div style={{ width: 300, marginRight: 120 }} className="resource-category">
                        <div className="block">

                            <Button onClick={this.initData}>新建</Button>
                            {updateInfoList.map(updateInfo => {
                                return (
                                    <div key={updateInfo.id}
                                         style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}>
                                        <span className="title">{updateInfo.title}</span>
                                        <span>{new Date(parseInt(updateInfo.id)).toLocaleString()}</span>
                                        <span className="edit"
                                              onClick={() => this.getUpdateInfo(updateInfo.id)}>edit</span>
                                        <span className="delete"
                                              onClick={() => this.deleteInfo(updateInfo.id)}>delete</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <div className="form">
                        {this.props.fields.map(field => {
                            const Comp = Widgets[field.type];
                            const value = this.state[field.name];

                            if (field.type == 'LabelAddForm') {
                                const subFields = value || [];
                                return (
                                    <div key={field.name}>
                                        <Widgets.LabelButton
                                            title={field.title}
                                            onClick={() => {
                                                const index = 1 + (subFields.length / field.form.length);
                                                const newFields = field.form.map(f => ({
                                                    ...f,
                                                    title: f.title + '_' + index,
                                                    name: f.name + '_' + index
                                                }));
                                                this.setState({
                                                    [field.name]: subFields.concat(newFields)
                                                })
                                            }}
                                        />{
                                        subFields.map(f => {
                                            const SubComp = Widgets[f.type];
                                            const subValue = this.state[f.name];
                                            return (
                                                <SubComp {...f} key={f.name}
                                                         error={f.error}
                                                         value={subValue}
                                                         onBlur={(e) => {
                                                             f.error = subValue && f.valid && !f.valid(subValue) && f.hint;
                                                             this.setState({ [e.target.name]: e.target.value });
                                                         }}
                                                         onChange={(e) => {
                                                             this.setState({ [e.target.name]: e.target.value });
                                                         }}/>
                                            );
                                        })
                                    }
                                    </div>
                                );
                            }
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