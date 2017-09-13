/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Button from './Button';
import { LabelInput } from '../components/Widgets'

class SubmitEmail extends Component {
    componentWillMount() {
        this.state = {
            email: ''
        }
    }

    componentDidMount() {
        _clForm.loadForm('http://host.convertlab.com', 'a3dbf5b27ffe492ca66e694a613ccab1', {
            onSubmit: () => {
                let url = '/formSubmitted#email=' + this.state.email;
                if (this.props.from) {
                    url = url + '&from=' + this.props.from;
                }

                location.href = url;
            }
        });
    }

    onChange = (e, updateError) => {
        const email = e.target.value;
        let error = '';
        if (updateError && email && !/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)) {
            error = '请输入有效的邮箱地址';
        }
        this.setState({ [e.target.name]: email, error });
    };

    render() {
        const { btnText, color = 'orange', length = 'small', linkName } = this.props;
        const { email, error } = this.state;

        return (
            <form id="clForm" data-cl-attached="true" data-cl-id="a3dbf5b27ffe492ca66e694a613ccab1"
                  action="http://host.convertlab.com/form/a3dbf5b27ffe492ca66e694a613ccab1" method="POST"
            >
                <div className="input-group">
                    <input style={{visibility: 'hidden', position:'absolute'}} defaultValue={linkName} name="name390"/>
                    <LabelInput placeholder="电子邮箱"
                                error={error}
                                required
                                value={email}
                                onChange={this.onChange}
                                onBlur={(e) => this.onChange(e, true)}
                                name="email"
                    />
                    <Button disabled={error}
                            text={btnText}
                            color={color}
                            radius="square"
                            padding="small"
                            length={length}
                            id="clSubmitForm"
                    />
                </div>
            </form>
        );
    }
};

export default SubmitEmail;