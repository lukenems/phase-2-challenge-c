const cars = require('./cars.json')
const yearRange = process.argv[2].split("-")
const minYear = Number.parseInt(yearRange[0])
const maxYear = Number.parseInt(yearRange[1])
if(!yearRange[1] || isNaN(minYear) || isNaN(maxYear)) {
  throw new Error("Enter two full years YYYY-YYYY")
}
const carSearch = (yearRange) => {
  var withinRange = []
  for (i = 0; i< cars.length; i++) {
    if (cars[i].year >= minYear && cars[i].year <= maxYear) {
      let match = ({
        "id": cars[i].id,
        "make": cars[i].make,
        "model": cars[i].model,
        "year": cars[i].year
      })
      withinRange.push(match)
    }}
  console.log(withinRange)
}
console.log('Finding cars from ' + x + ' to ' + y + '...\n');
carSearch(yearRange)
