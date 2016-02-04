/*jslint node: true */
'use strict';

var build = require('./lib/build');

build('src/bone.css', 'dist/bone.css', 'dist/bone.min.css');
