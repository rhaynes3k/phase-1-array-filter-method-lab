// Code your solution here
function findMatching(arr, str) {
  let nameList = arr.filter(nm => nm.toLowerCase() === str.toLowerCase())
  return nameList
}

function fuzzyMatch(arr, str){
    let matches = arr.filter(nm => nm.indexOf(str) === 0)
    console.log(matches)
    return matches
}

function matchName(arr, str){
  let mch = arr.filter((nm) => nm.name === str)
   return mch
}
