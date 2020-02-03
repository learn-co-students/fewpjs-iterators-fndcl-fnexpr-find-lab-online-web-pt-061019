// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "L"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(record) {
  let found = record.find(e => e.result === "W")
  debugger
  if (typeof found === "undefined") {
    return undefined
  } else {
    return found.year
  }
}
// superbowlWin(record)