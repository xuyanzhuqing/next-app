/**
 * 计算 fibonacci number
 */

importScripts(['./fibonacci.js'])

self.addEventListener(
  'message',
  function (e) {
    var data = e.data
    switch (data.cmd) {
      case 'start':
        self.postMessage(fibonacci(data.data))
        break
      case 'stop':
        self.postMessage('WORKER STOPPED: ' + data.msg)
        self.close() // Terminates the worker.
        break
      default:
        self.postMessage('Unknown command: ' + data.msg)
    }
  },
  false
)
