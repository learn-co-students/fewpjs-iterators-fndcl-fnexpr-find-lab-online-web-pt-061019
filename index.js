const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}

]

function superbowlWin(arr) {
  let win = arr.find( function(element) {
    return element.result === "W";
    // console.log(element.result);
  })
  if (win) {
    return win.year;
  }
  // return win.year;
}
