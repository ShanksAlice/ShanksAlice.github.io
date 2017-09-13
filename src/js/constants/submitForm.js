/**
 * Created by huangling on 20/05/2017.
 */

const formData = [{
    title: '姓名',
    required: true,
    hint: '',
    name: 'name',
    type: 'LabelInput'
}, {
    title: '手机号码',
    required: true,
    hint: '手机号为13位数字',
    name: 'mobile',
    type: 'LabelInput',
    id: 'clMobileField',
    valid: (phone) => /^1[34578]\d{9}$/.test(phone)
}, {
    title: '验证码',
    required: true,
    hint: '',
    name: 'code',
    type: 'PhoneCode'
}, {
    title: '邮箱',
    required: true,
    hint: '邮箱格式为: info@convertlab.com',
    name: 'email',
    type: 'LabelInput',
    valid: (email) => /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)
}, {
    title: '公司',
    required: false,
    hint: '',
    name: 'company',
    type: 'LabelInput'
}, {
    title: '职位',
    required: false,
    hint: '',
    name: 'title',
    type: 'LabelInput'
}];

export {
    formData
};