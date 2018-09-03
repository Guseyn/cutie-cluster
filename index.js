module.exports = {

  ClusterWithDisconnectEvent: require('./src/cluster/ClusterWithDisconnectEvent'),
  ClusterWithExitEvent: require('./src/cluster/ClusterWithExitEvent'),
  ClusterWithForkedWorkers: require('./src/cluster/ClusterWithForkedWorkers'),
  ClusterWithForkEvent: require('./src/cluster/ClusterWithForkEvent'),
  ClusterWithListeningEvent: require('./src/cluster/ClusterWithListeningEvent'),
  ClusterWithMessageEvent: require('./src/cluster/ClusterWithMessageEvent'),
  ClusterWithOnlineEvent: require('./src/cluster/ClusterWithOnlineEvent'),
  DisconnectedCluster: require('./src/cluster/DisconnectedCluster'),

  DisconnectedWorker: require('./src/worker/DisconnectedWorker'),
  ForkedWorker: require('./src/worker/ForkedWorker'),
  IsConnected: require('./src/worker/IsConnected'),
  IsDead: require('./src/worker/IsDead'),
  IsExitedAfterDisconnect: require('./src/worker/IsExitedAfterDisconnect'),
  KilledWorker: require('./src/worker/KilledWorker'),
  SentMessage: require('./src/worker/SentMessage'),
  Worker: require('./src/worker/Worker'),
  WorkerId: require('./src/worker/WorkerId'),
  WorkerProcess: require('./src/worker/WorkerProcess'),
  Workers: require('./src/worker/Workers'),
  WorkerWithDisconnectEvent: require('./src/worker/WorkerWithDisconnectEvent'),
  WorkerWithErrorEvent: require('./src/worker/WorkerWithErrorEvent'),
  WorkerWithExitEvent: require('./src/worker/WorkerWithExitEvent'),
  WorkerWithListeningEvent: require('./src/worker/WorkerWithListeningEvent'),
  WorkerWithMessageEvent: require('./src/worker/WorkerWithMessageEvent'),
  WorkerWithOnlineEvent: require('./src/worker/WorkerWithOnlineEvent'),

  IsMaster: require('./src/IsMaster'),
  IsWorker: require('./src/IsWorker'),
  SchedulingPolicy: require('./src/SchedulingPolicy'),
  Settings: require('./src/Settings'),
  SetupMaster: require('./src/SetupMaster')

}
