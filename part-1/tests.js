const {weekday} = require('./functions.js')
const {expect} = require('chai')

describe('weekday', () => {
  it('should return name of the weekday for a given Date Object', () => {
    const date = new Date(2017, 7, 6)
    expect(weekday(date)).to.equal("Sunday")
  })
})
