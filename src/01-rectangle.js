const rectangle = {
  width: 3,
  height: 7,
  colour: 'green',

  area () {
    return this.width * this.height
  },

  perimeter () {
    return 2 * (this.width + this.height)
  }
}

module.exports = { rectangle }