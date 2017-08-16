const cars = require('./cars.json')
const yearRange = process.argv[2].split("-")

// if(typeof x !==)
const x = Number.parseInt(yearRange[0])
const y = Number.parseInt(yearRange[1])

const carSearch = (yearRange) => {
  var withinRange = []
  for (i = 0; i< cars.length; i++) {
    if (cars[i].year >= x && cars[i].year <= y) {
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
// const query = cars.filter(data => {
//   if(data.year >= x && data.year <= y) {
//   return match = ({
//     "id": data.id,
//     "make": data.make,
//     "model": data.model,
//     "year": data.year})
//
//   }})
//
//
//     console.log(query)
