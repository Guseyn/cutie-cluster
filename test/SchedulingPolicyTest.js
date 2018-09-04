
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  SchedulingPolicy
} = require('./../index');

const cluster = require('cluster');

new Assertion(
  new IsNumber(
    new SchedulingPolicy(cluster)
  )
).call();
