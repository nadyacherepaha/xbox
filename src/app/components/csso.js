import 'csso/lib/index.js'

var csso = require('csso');

var minifiedCss = csso.minify('app').css;

console.log(minifiedCss);
