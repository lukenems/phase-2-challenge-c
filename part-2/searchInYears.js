const cars = require('./cars.json')
const search = process.argv[2].split("-")

const x = search[0]
const y = search[1]

const query = cars.filter(data => {
  if(data.year >= x && data.year <= y) {
  return match = ({
    "id": data.id,
    "make": data.make,
    "model": data.model,
    "year": data.year})

  }})
  

    console.log(query)

// const carSearch = () => {
//   var holder = []
//   for (i = 0; i< cars.length; i++) {
//     if (cars[i].year >= x && cars[i].year <= y) {
//       let water = ({
//         "id": cars[i].id,
//         "make": cars[i].make,
//         "model": cars[i].model,
//         "year": cars[i].year
//       })
//
//       holder.push(water)
//     }
//
//   }
//   console.log(holder)
// }
//
// carSearch()
