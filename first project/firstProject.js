  let singer = [
  { name: "reza pishro" , sabk: "rap" , age: 36},
  { name:"shahin najafi", sabk: "rap" , age: 40},
  { name: "bahram", sabk: "rap" , age: 39},
  { name: "25 band" , sabk: "pop" , age: 35},
  { name: "tataloo" , sabk: " kossher " , age:35}
]

function name (x) {
  return x.neme
}

function raper(x) {
  return x.sabk == "rap"
}

function age(x) {
  return x.age <= 39
}

let khafan = singer.filter(raper).filter(age)

console.log(khafan)
