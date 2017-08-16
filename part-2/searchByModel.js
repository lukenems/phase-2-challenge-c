const cars = require('./cars.json')
const search = process.argv[2]

const searchByModel = (search) => {
  let matches = []
  for (i=0; i<cars.length; i++) {
  if(cars[i].model.toLowerCase() === search.toLowerCase()) {
    let match = ({
    "id": cars[i].id,
    "model": cars[i].model,
    "year": cars[i].year,
    "last_owner": cars[i].last_owner,
    "date_purchased": cars[i].date_purchased
    })
    matches.push(match)
  }}
  console.log(matches)
}
console.log('Finding cars with model ' + '"' + search + '"' + '...\n');
searchByModel(search)
