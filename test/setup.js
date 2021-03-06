var React = require('react');
var chai = require('chai');
var jsdom = require('jsdom');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

global.React = React;
global.expect = chai.expect;
