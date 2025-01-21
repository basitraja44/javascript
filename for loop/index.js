// let animals =  ["cat","dog", "fish","bakri"];

// let newAnimals = []


// for(let i = 0; i<animals.length; i++){
//     newAnimals.push(animals[i])
//     console.log(newAnimals)
// }

let ourServiceAreas = ["karachi", "islamabad", "Quetta"]
let userResponse = "Quetta"

// Not Recommended

// if(userResponse === ourServiceAreas[0]){
//     console.log("Yes we offer servies here")
// } else if(userResponse === ourServiceAreas[1]){
//     console.log("Yes we offer servies here")
// } else if(userResponse === ourServiceAreas[2]){
//     console.log("Yes we offer servies here")
// }else{
//     console.log("Sorry We don't deliver in you area")
// }
let isfound = false
for(let i = 0; i < ourServiceAreas.length; i++){
    if(userResponse === ourServiceAreas[i]){
        isfound = true
        break;
    }
    else{
        isfound = false
    }
}
isfound ? console.log("yes"):console.log("no")