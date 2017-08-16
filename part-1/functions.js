const weekday = (date) => {
  if(!(date instanceof Date)) {
    throw new Error("Enter a date object")
  } else {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayName[date.getDay()]
  }
}

const capitalizeFourth = (orgStr) => {
  if(typeof orgStr !== 'string') {
    throw new Error('Enter a String')
  } else {
  let setup = orgStr.toLowerCase().split("");
  for(i=3; i < setup.length; i+=4) {
      if(!((i+1) % 4)) {
        setup[i] = setup[i].toUpperCase()
      }}
    return setup.join('')
    }
}

const filterAround = (array, lower, upper) => {
  let outliar = []
  for (i = 0; i < array.length; i++ ) {
    if (typeof array[i] !== 'string'){
      throw new Error("Enter an array of Strings")
    } if(array[i] < lower || array[i] > upper) {
      outliar.push(array[i])
    }
  }return outliar
}

const getValues = (obj) => {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    throw new Error("Enter an Object")
  }return Object.keys(obj).map(function(values) {
    return obj[values];
})}


module.exports = {weekday, capitalizeFourth, getValues, filterAround}
