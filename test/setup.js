'use strict';

const chai = require('chai');
const Promise = require('bluebird');

Promise.promisifyAll(require('fs-extra'));

global.sinon = require('sinon');
global.assert = chai.assert;

sinon.assert.expose(chai.assert, {prefix: ''});
