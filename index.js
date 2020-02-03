const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {

  // array.find( function(s) { return s["result"] === "W" })

  let result = array.find( function(s) { return s.result === "W" })

  return !!result ? result.year : undefined





  // for (let record of array) {
  //   record.find( x => x === "W" })
  // }

  // let x = array.find(function(x) { return x == "W"})
  //
  // return x[year]



}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]
