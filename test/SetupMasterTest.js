
'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  SetupMaster
} = require('./../index');

const cluster = require('cluster');

new DeepEqualAssertion(
  new SetupMaster(cluster), process
).call();
