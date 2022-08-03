const point = {
  x: 5,
  y: 9,

  move(dx, dy) {
    this.x += dx
    this.y += dy
  },

  reflect () {
    [this.x, this.y] = [this.y, this.x]
  },

  stretch (k) {
    this.x *= k
    this.y *= k
  }
}

module.exports = { point }