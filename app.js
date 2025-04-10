const names = require('./names');
const sayHi = require('./utils');
require('./mind-grenade-module'); //node invokes the module as a function while importing it. Thus addValues fn gets executed.

sayHi(names.name1);
sayHi(names.name2);