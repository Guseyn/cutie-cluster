
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  Settings
} = require('./../index');

const cluster = require('cluster');

new Assertion(
  new Is(
    new Settings(cluster), Object
  )
).call();
