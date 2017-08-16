const cars = require('./cars.json')
const model = process.argv[2]
const searchByModel = (model) => {
  let matches = []
  for (i=0; i<cars.length; i++) {
  if(cars[i].model.toLowerCase() === model.toLowerCase()) {
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
console.log('Finding cars with model ' + '"' + model + '"' + '...\n');
searchByModel(model)
