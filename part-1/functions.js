const weekday = (date) => {
  if(!(date instanceof Date)) {
    throw new Error("Enter a date object")
  } else {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayName[date.getDay()]
  }
}

const capitalizeFourth = (orgStr) => {
  let setup = orgStr.toLowerCase().split("");
  for(i=0; i<=setup.length; i+4) {

  }
};


const getValues = (obj) => {
  if(Array.isArray(obj) || typeof obj !== 'object') {
    throw new Error("Enter an object")
  } return Object.values(obj)}


module.exports = {weekday, getValues}
