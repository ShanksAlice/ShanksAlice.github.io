/**
 * Created by huangling on 20/05/2017.
 */
import {
    THEMES, TYPES
} from './library';

const library = [{
    title: '链接名称',
    required: false,
    hint: '',
    name: 'linkName',
    type: 'LabelInput'
}, {
    title: '标题',
    required: true,
    hint: '',
    name: 'title',
    type: 'LabelInput'
}, {
    title: '内容类型',
    required: true,
    hint: '',
    name: 'contentType',
    defaultValue: 'markdown',
    options: [
        {value: 'markdown', label: 'Markdown'},
        {value: 'html', label: 'html'},
    ],
    type: 'LabelRadio'
}, {
    title: '内容',
    required: true,
    hint: '',
    name: 'content',
    type: 'LabelLongInput',
}, {
    title: '大小',
    required: false,
    hint: '格式为:[数字][单位], 例如:3.2MB',
    name: 'size',
    type: 'LabelInput',
    valid: (size) => /^\d+\.?\d?(M|K)B?$/i.test(size)
}, {
    title: '文件名',
    required: false,
    hint: '',
    name: 'fileName',
    type: 'LabelInput'
}, {
    title: '图片地址',
    required: false,
    hint: 'CDN路径',
    name: 'img',
    type: 'LabelInput'
}, {
    title: '标签',
    required: true,
    hint: '',
    name: 'tags',
    defaultValue: [],
    options: THEMES.map(key => ({value: key, label:key})),
    type: 'LabelCheckbox'
}, {
    title: '分类',
    required: true,
    hint: '',
    name: 'type',
    options: TYPES.map(key => ({value: key, label:key})),
    type: 'LabelDropDown'
}, {
    title: '显示类型',
    required: true,
    hint: '',
    name: 'detailType',
    defaultValue: 'detail',
    options: [
        {value: 'detail', label: '有图版'},
        {value: 'brief', label: '无图版'},
    ],
    type: 'LabelRadio'
}];

const updateInfo = [{
    title: '标题',
    required: true,
    hint: '',
    name: 'title',
    type: 'LabelInput'
}, {
    title: '摘要',
    required: false,
    hint: '',
    name: 'briefs',
    type: 'LabelInput'
}, {
    title: '发布时间',
    required: true,
    hint: 'yyyy.mm.dd',
    name: 'publishDate',
    type: 'LabelInput',
    valid: (date) => /20\d{2}\.(0|1)\d\.(0|1|2|3)\d/.test(date)
},{
    title: '内容',
    required: false,
    hint: '',
    name: 'desc',
    type: 'LabelLongInput',
}, {
    title: '添加详细描述',
    required: false,
    hint: '',
    defaultValue: [],
    name: 'details',
    form: [{
        title: '标题',
        required: true,
        hint: '',
        name: 'title',
        type: 'LabelInput'
    }, {
        title: '头像',
        required: true,
        hint: 'CDN路径',
        name: 'img',
        type: 'LabelInput'
    }, {
        title: '姓名',
        required: true,
        hint: '',
        name: 'name',
        type: 'LabelInput'
    }, {
        title: '职位',
        required: true,
        hint: '',
        name: 'jobTitle',
        type: 'LabelInput'
    }, {
        title: '描述',
        required: true,
        hint: '',
        name: 'desc',
        type: 'LabelLongInput'
    }],
    type: 'LabelAddForm',
}];

export {
    library,
    updateInfo
};