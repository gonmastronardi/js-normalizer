const debug = require('debug');

//export DEBUG=...,*
const field = debug('field');
const info = debug('info');

module.exports = {
    field, 
    info
}