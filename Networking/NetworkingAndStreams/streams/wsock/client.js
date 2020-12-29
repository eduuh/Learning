var wsock = require('websocket-stream')
var stream = wsock('ws://' + location.host)

var html = require('yo-yo')
var root = document.body.appendChild(document.createElement('div'))


