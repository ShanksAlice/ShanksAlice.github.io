/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import { ServerApp } from './route';
import { StaticRouter } from 'react-router'
import { routeMap } from '../src/js/constants/routes';

const context = {};
export default function render(req, res) {
    const appString = renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <ServerApp/>
        </StaticRouter>
    );

    const url = req.url.split('?')[0].replace('/', '');
    if (context.url) {
        res.redirect(context.status, context.url);
    } else {
        res.send(template({
            body: appString,
            title: 'Convertlab 营销实验室' + (routeMap[url] ? (' - ' + routeMap[url].label) : ''),
        }));
    }
}
