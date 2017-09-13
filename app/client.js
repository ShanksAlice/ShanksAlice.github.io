/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { ServerApp } from './route';
import {
    BrowserRouter,
} from 'react-router-dom'

 render(<BrowserRouter><ServerApp /></BrowserRouter>, document.getElementById('root'));
