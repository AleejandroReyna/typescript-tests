// without params
const myName = ():string => "Alejandro"

// with param
const greetings = (name:string):string => `Hi ${name}!`

// with two params
const checkFavoriteThings = (song:string, lucky_number:number) => {
  return (song == 'Minha' && lucky_number == 21) ?
    true : false
}

//rest params
const favoriteSongs = (...songs:string[]):string => {
  return songs.join(", ")
}

console.log("- What is your name?")
console.log(`- My name is ${myName()}`)
console.log("- Can you greet to me?")
console.log(`- Sure...`)
console.log(greetings("stranger"))
console.log("what is your favorite song and the lucky number?")
console.log("- I think so, I wish I new and 23")
if (checkFavoriteThings("Minha", 21)) {
  console.log("- Are my favorite song too, and the lucky number as te same. We would be twins.")
} else {
  console.log("- It's not my favorite song, bye bye!")
}
console.log("- What is your favorite songs?")
console.log(`- I really love ${favoriteSongs("Blue and Green", "Autumm Leaves", "Betty")}`)
