# cutie-cluster

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>cluster</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-cluster/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/cluster');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>fs</b> module.

## cluster

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ClusterWithDisconnectEvent` | `cluster.on('disconnect', event)` | `cluster, event (Event with definedBody(worker))` | `cluster` |
| `ClusterWithExitEvent` | `cluster.on('exit', event)` | `cluster, event (Event with definedBody(worker, code, signal))` | `cluster` |
| `ClusterWithForkedWorkers` | `for (let i = 0; i < num; i++) {cluster.fork(env);}` | `cluster, num(number of workers), env` | `cluster` |
| `ClusterWithForkEvent` | `cluster.on('fork', event)` | `cluster, event (Event with definedBody(worker))` | `cluster` |
| `ClusterWithListeningEvent` | `cluster.on('listening', event)` | `cluster, event (Event with definedBody(worker, address))` | `cluster` |
| `ClusterWithMessageEvent` | `cluster.on('message', event)` | `cluster, event (Event with definedBody(worker, message, handle))` | `cluster` |
| `ClusterWithOnlineEvent` | `cluster.on('online', event)` | `cluster, event (Event with definedBody(worker))` | `cluster` |

## worker

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `DisconnectedWorker` | `worker.disconnect` | `worker` | `worker` |
| `ForkedWorker` | `cluster.fork` | `cluster, env` | `worker` |
| `IsConnected` | `worker.isConnected` | `worker` | `boolean` |
| `IsDead` | `worker.isDead` | `worker` | `boolean` |
| `IsExitedAfterDisconnect` | `worker.exitedAfterDisconnect` | `worker` | `boolean` |
| `KilledWorker` | `worker.kill` | `worker, signal('SIGTERM')` | `worker` |
| `SentMessage` | `worker.send` | `worker, message[, sendHandle][, callback]` | `message(string)` |
| `Worker` | `cluster.worker` | `cluster` | `worker` |
| `WorkerId` | `worker.id` | `worker` | `number` |
| `WorkerProcess` | `worker.process` | `worker` | `process` |
| `WorkerWithDisconnectEvent` | `worker.on('disconnect', event)` | `worker, event(Event with definedBody())` | `worker` |
| `WorkerWithErrorEvent` | `worker.on('error', event)` | `worker, event(Event with definedBody(error))` | `worker` |
| `WorkerWithExitEvent` | `worker.on('exit', event)` | `worker, event(Event with definedBody(code, signal))` | `worker` |
| `WorkerWithListeningEvent` | `worker.on('listening', event)` | `worker, event(Event with definedBody(address))` | `worker` |
| `WorkerWithMessageEvent` | `worker.on('message', event)` | `worker, event(Event with definedBody(msg))` | `worker` |
| `WorkerWithOnlineEvent` | `worker.on('online', event)` | `worker, event (Event with definedBody())` | `worker` |
| `Workers` | `cluster.workers` | `cluster` | `object` |

## common

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `IsMaster` | `cluster.isMaster` | `cluster` | `boolean` |
| `IsWorker` | `cluster.isWorker` | `cluster` | `boolean` |
| `SchedulingPolicy` | `cluster.schedulingPolicy` | `cluster` | `number` |
| `Settings` | `cluster.settings` | `cluster` | `object` |
| `SetupMaster` | `cluster` | `cluster` | `process` |

[npm-image]: https://img.shields.io/npm/v/@cuties/cluster.svg
[npm-url]: https://npmjs.org/package/@cuties/cluster
