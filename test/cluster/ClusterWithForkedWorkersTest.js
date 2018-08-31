
'use strict'

const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is,
  IsNumber,
  IsNull
} = require('@cuties/is');
const {
  If
} = require('@cuties/if-else');
const {
  Keys
} = require('@cuties/object');
const {
  ClusterWithForkedWorkers,
  Workers,
  DisconnectedCluster,
  IsMaster
} = require('./../../index');

const numCPUs = require('os').cpus().length;
const cluster = require('cluster');

let arr = [];
for (let i = 1; i <= numCPUs; i++) {
  arr.push(i + '');
}

new If(
  new IsMaster(cluster),
  new DeepEqualAssertion(
    new Keys(
      new Workers(
        new ClusterWithForkedWorkers(cluster, numCPUs)
      )
    ), arr
  ).after(
    new DisconnectedCluster(cluster)
  )
).call()
