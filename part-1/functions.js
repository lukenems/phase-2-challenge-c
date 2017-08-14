function weekday(date) {
  if(!(date instanceof Date)) {
    throw new Error("Enter a date object")
  } else {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayName[date.getDay()]
  }
}
