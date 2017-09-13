/**
 * Created by huangling on 21/05/2017.
 */
const blocks = [
    [{
        label: '首页',
        to: '/home'
    }, {
        label: '关于我们',
        to: '/about'
    }, {
        label: '产品更新',
        to: '/updateInfo'
    }],
    [{
        label: '人&数据',
        to: '/feature#people'
    }, {
        label: '内容&交互',
        to: '/feature#engage'
    }, {
        label: '策略&自动化',
        to: '/feature#automation'
    }, {
        label: '数据洞察',
        to: '/feature#insight'
    }],
    [/*{
        label: '合作伙伴',
        to: '/partner'
    }*/, {
        label: '营销学堂',
        to: '/library'
    }, /*{
        label: '博客',
        to: '/blog'
    },*/ {
        label: '加入我们',
        to: '/join'
    }]
];

export {
    blocks
};