/**
 * Created by huangling on 26/5/2017.
 */
const THEMES = ['全部', '内容营销', '营销趋势', '营销案例','MarTech','产品技巧','微信营销'];
const TYPES = ['全部', '电子书', '文章'];
const nav = [
    {
        key: 'tags',
        title: '主题',
        items: THEMES
    },
    {
        key: 'type',
        title: '类型',
        items: TYPES
    }
];

export {
    THEMES, TYPES, nav
}