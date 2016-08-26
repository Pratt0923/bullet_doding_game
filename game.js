var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d')

var keys = {
  left: 37,
  right: 39,
  up: 38,
  down: 40
}

var entites = []
var player = new Player()
entites.push(player)
var keysPressed = {}

window.addEventListener('keydown', function(e) {
  keysPressed[e.keyCode] = true
})

window.addEventListener('keyup', function(e) {
  delete keysPressed[e.keyCode]
})

function isKeyPressed(key) {
  return keysPressed[key]
}

function update() {
  entites.forEach(function(entity){
    entity.update()
  })
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function render() {
  entites.forEach(function(entity){
  entity.update()
})
}

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
