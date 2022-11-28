// code your solution here

// 



//   function superbowlWin(array){ 
//      return array.result === "W"
//  }
//  console.log(record.find(array).year)

// function superbowlWin(array){
//    return array.result === "W"  }
   

// array.find(superbowlWin)

//  function superbowlWin(array){
//    let found = array.find((item)=> { item.result ==="W"})
//     if(found.result === "W"){
//        return found
//     }
// }

function superbowlWin(array) {
   let found = array.find(item => item.result === "W")
   if (found) 
   {
        return found.year
  
}
}