const {weekday} = require('./functions.js')
const {getValues} = require ('./functions.js')
const {expect} = require('chai')

describe('weekday', () => {
  it('should return name of the weekday for a given Date Object', () => {
    const date = new Date(2017, 7, 6)
    expect(weekday(date)).to.equal("Sunday")
  })

  it('should throw an error when input is not a Date Object', () => {
    const notDate = "2017, 7, 6"
    expect(() => {weekday(notDate)}).to.throw("Enter a date object")
  })
})

describe('capitalizeFourth', () => {
  it('should return a string with every fourth letter capitalized, counting inclusively spaces and punctuation', () => {
    expect(capitalizeFourth("I said Wot in Tarnation")).to.equal("i sAid Wot In tArnaTion")
  })
  it('should throw an error when the type of input is Not a string', () => {
    expect(() => {capitalizeFourth(["this shouldnt work!"])}).to.throw("Enter a String")
  })
})

describe('getValues', () => {
  it('should return the values from a given object not including inherited values', () => {
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(getValues(friend)).to.deep.equal(['Dominique', 30, '555-555-5555'])
  })
})
