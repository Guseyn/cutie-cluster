
'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  SetupMaster
} = require('./../index')
const cluster = require('cluster')

new DeepStrictEqualAssertion(
  new SetupMaster(cluster), process
).call()
