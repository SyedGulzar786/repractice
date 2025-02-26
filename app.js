// var arr = [];
// var arr = ["gulzar", "ali"];
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var arr = [{
//     name: "gulzar",
//     age: 22
// },{
//     name: "ali",
//     age: 23
// }];

// var arr = ["ssc", "hssc", "bsc", "msc"];
// document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br>" + arr[3] + "<br>");

// var arr = ["gulzar", "ali", "umer", "saad", "shahzad"];
// var score = [320, 230, 480, 120, 420];
// var total = 500;
// var percentage = 0;
// for (var i = 0; i < arr.length; i++) {
//     percentage = (score[i] / total) * 100;
//     document.write("Score of " + arr[i] + " is " + score[i] + ". Percentage: " + percentage + "%<br>");
// }

// var arr = ["green", "yellow", "black"];
// var prom = prompt("Enter color you want to add in the beginning of array");
// arr.pop(prom)
// document.write(arr);

// var arr = [120,394,563,78,9 ,15,10]
// arr.sort(function(a, b){return a-b})

// var arr = ["karachi","lahore","islamabad","pishawer","quetta"];
// var city = arr.slice(2,4);
// document.write(city);

// var arr = ["this", "is", "my", "cat"];
// var final = arr.join(" ");
// document.write(final);

// document.write(arr)  

// var arr = ["eat","ate","act","cat","art","rat"]
// var value1 = "";
// var value2 = "";
// var array = [];
// var arr1 = "";
// var arr2 = "";

// // var flag = false;
// for(let i = 0; i <= arr.length; i++){
//     console.log(i)
//     value1 = arr[i];//eat
//     for(let j = 0; j <= arr.length; j++){
//             value2 = arr[j]//ate
//             arr1 = value1
//             arr2 = value2
//             console.log(arr1,arr2)

//             arr1 = arr1.split("");
//             arr1 = arr1.sort();
//             arr1 = arr1.join("");
            
//             arr2 = arr2.split("");
//             arr2 = arr2.sort();
//             arr2 = arr2.join("");
            
            
//             if(arr1 == arr2){
//              array.push([value1,value2])
//             //  flag = true
//              console.log(array)
//             }
//         }
//     }


//        var arr = ["eat","ate","act","cat","art","rat"]
//        var array = [];
//        var count = 0;
//     // var store = "";
//         for(let i = 0; i < arr.length; i++){
//          for(let j = 0; j < arr.length; j++){
//             var arr1 = arr[i];
//             var arr2 = arr[j];
//                 // console.log(arr1,arr2)
//                 for(let k = 0; k < arr1.length; k++){
//                     for(let l = 0; l < arr2.length; l++){
//                         // console.log(arr1[k],arr2[l])
//                         if(arr1[k] == arr2[l]){
//                             // store += arr1[k]
//                             count++
//                             // console.log(arr1[k])
//                             // console.log(count,arr1,arr2,arr1.length)
//                             if(count == arr1.length){
//                                 array.push([arr1,arr2])
//                                 //  console.log("task has been completed")
//                             }
                        
//                         }
//                     };
//                         // console.log("---------------")
//                     };
//                     count = 0
//                     // console.log(count,array)
//                     // console.log("end")
//          }
//         }
//  document.write(array)

// var arr = ["eat","ate","act","cat","art","rat"]
// var array = [];
// var count = 0;
//  for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr.length; j++){
//      var arr1 = arr[i];
//      var arr2 = arr[j];
//          for(let k = 0; k < arr1.length; k++){
//              for(let l = 0; l < arr2.length; l++){
//                  if(arr1[k] == arr2[l]){
//                      count++
//                      if(count == arr1.length){
//                          array.push([arr1,arr2])
//                      }
                 
//                  }
//              };
//              };
//              count = 0
//   }
//  }
// document.write(array)