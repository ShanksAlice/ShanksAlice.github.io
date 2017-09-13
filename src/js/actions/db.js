/**
 * Created by huangling on 19/5/2017.
 */
import request from 'superagent';

export const getParamsMap = (params, type = 'hash') => {
    const mark = type == 'hash' ? '#' : '?';
    if (params.indexOf(mark) == 0) {
        params = params.substr(1);
    }

    const paramMap = {};
    params.split('&').map(str => {
        const [key, value] = str.split('=');
        paramMap[key] = value;
    });
    return paramMap;
};

export const getParams = (params, queryKey, type = 'hash') => {
    const paramMap = getParamsMap(params, type);
    return paramMap[queryKey];
};

export const getData = (type, id) => {
    const req = id ? request.get(`/db/${type}/get`, {id}) : request.get(`/db/${type}/list`);
    return req.then(res => res.body)
        .catch(err => {
            console.log('Can not get ' + type);
            console.log(err.message);
        });
};

export const addDocs = (url, doc) => {
    doc.id = new Date().getTime() + '';
    return request.post(url).send(doc)
        .then(res => res.body)
        .catch(err => {
            console.log('Can not add docs');
            console.log(err.message);
        });
};

export const updateData = (type, data) => {
    const url = `/db/${type}/update`;
    return request.post(url).send(data)
        .then(res => res.body)
        .catch(err => {
            console.log('Can not update ' + (data.title || data.id));
            console.log(err.message);
        });
};

export const submitForm = (type, doc) => {
    const url = `/db/${type}/add`;
    return addDocs(url, doc);
};

export const submitCustomer = (data) => {
    data.id = new Date().getTime() + '';
    return request.post('/db/form/submit').send(data)
        .then(res => res.body)
        .catch(err => {
            console.log('submit form failed!');
            console.log(err.message);
        });
};

export const liked = (id, detailId) => {
    return request.get('/db/like', {id, detailId})
        .then(res => res.body)
        .catch(err => {
            console.log('liked failed!');
            console.log(err);
        });
};

export const deleteData = (type, id) => {
    return request.get(`db/${type}/delete`, {id});
};