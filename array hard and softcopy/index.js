//   JS ARRAY SOFTCOPY

//  let userNames = ["Rafay","A Basit","Talha","unknown"]

// //   console.log(userNames);

//  let copyOfUserName = userNames;
//   console.log(copyOfUserName);
  
//   copyOfUserName.pop()
//   console.log(userNames)
//   console.log(copyOfUserName);

  // JS ARRAY HARDCOPY

  let userNames = ["Rafay","A Basit","Talha","unknown"]
console.log(typeof(userNames[0]))

// let newusernames =[...userNames]
let newusernames = userNames.slice()
userNames.pop()

console.log(userNames)
console.log(newusernames)