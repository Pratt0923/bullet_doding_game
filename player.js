class Player {
  constructor() {
    this.x = 100
    this.y = 100
    this.width = 50
    this.height = 50
    this.velocity = {
      x: 1,
      y: 1
    }
    this.acceleration = {
      x: 2,
      y: 5
    }
    this.gravity = {
      x: 0,
      y: 4
    }
    this.friction = {
      x: 1,
      y: 1
    }
  }

  update() {
    if (isKeyPressed(keys.left)) {
      this.x -= this.velocity.x * this.acceleration.x
    }
    if (isKeyPressed(keys.right)) {
      this.x += this.velocity.x * this.acceleration.x
    }
    if (isKeyPressed(keys.up)) {
      this.y -= this.velocity.y * this.acceleration.y
    }
    if (isKeyPressed(keys.down)) {
      this.y += this.velocity.y * this.acceleration.y
    }

    this.x += this.gravity.x
    this.y += this.gravity.y

    this.enforceBoundaries()
  }

  enforceBoundaries() {
    if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width
    }

    if (this.x < 0) {
      this.x = 0
    }

    if (this.y < 0) {
      this.y = 0
    }

    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height
    }
  }

  render() {
    ctx.fillStyle = 'rgba(0, 255, 255, 1.0)'

    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
