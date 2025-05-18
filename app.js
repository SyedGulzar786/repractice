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


// // destructuring
// // let
// let student = {
//     name :"abc",
//     email:"abc@gmail.com",
//     classDetails : {
//         time : "9-11"
//     }

// }

// // so
// let time  = "1212"
// // console.log(time)
// let {email, name, classDetails} = student // destructuring
// let {time : classtime} = classDetails // renamibg a property .!!!
// console.log(name, email, classDetails, classtime)


// let obj = {
//     name : "avcs",
//     abcd : "avcdjfhf"
// }
//  let arr =  [123,1243.1223,23322,3331]
// for(var bcd in obj){
// console.log(bcd) // properties of obj .!!!
// }
// for(var abc of arr){
// console.log(abc) // values of arr .!!!
// }


// // OBJECT DESTRUCTURING :

const obj = {
    abc : "ABC",
    prop1: "val1",
    prop2: "val2",
    prop3: "val3",
    student : {
            name :"abc",
            email:"abc@gmail.com",
            classDetails : {
                time : "9-11"
            }
        
        },
    prop: "abc",
    school: "abcSchool"
}
// console.log(obj.abc)

// // 1.) property to varibale

// const {abc} = obj
// console.log(obj,abc)

// // 2.) multiple properties to varible

// const {prop1, prop2, prop3} = obj
// console.log(obj,prop1,prop2,prop3)

// // 3.) default value

// const {prop = "default"} = obj // when value dosent exist 
// console.log(obj,prop)

// // 4.) alias

// const {prop : myprop} = obj  // changing property name through destructuring 
// console.log(myprop)

// // 5.) deep property

// const {student : {email}} = obj  //destructuring out a deep prop 
// console.log(email)

// // 6.) dynamic property name

// let search = "school" // stores the property name into an string variable .!!!
// let { [search] : a} = obj  // putting the property variable in the dynamic brackets brings the value pf that property in the set variable a .!!!
// console.log(a)


// DEFUALT AND REST PARAMETERS
//               // (defualt patameter),  // rest parameter
// function abc(a = "not available", ...xyz){
//  console.log(a, xyz) // the a returns the value meanwhile the xyz returns an array with all th rest of the values through rest parameters.
// }
// abc("hello", "when", "marimba", "rythem", "starts", "to", "play", true, 43, "43")

// SPREAD OPERATOR (...)
// what spread operator does is actually is that it only takes all the stored values from the var it is used before.
// let arr1 = ["abv", "bhg", "hgy"]
// let arr2 = [112, 33, 444]
// let arr = [...arr1, ...arr2] 
// console.log(arr, arr1, arr2)

// DEEP COPY AND SHALLOW COPY
// let obj1 = {...obj}
// let obj2 = JSON.parse(JSON.stringify(obj))
//  console.log(obj, obj1, obj2)
 
// ENHANCED BOJECT LITERALS
// let abc = "name";
// let xyz = "email";

// let object = {
    // abc,
    // xyz
// }

// console.log(object)

// ARRAY METHODS FOR EACH, MAP, FILTER

// let arr  = [11, 22, "three", true, "5"]

// let arr1 = arr.forEach(
//     (elem, i , all) => { // elem, i .!!!
//      console.log("foreach --->",elem, i, all)  //.!!! // alteration
//      console.log("condition foreach --->",elem) // returns value on conditoni
//      return elem
//     }
// )
// console.log("arr1 --->",arr1) // undefined does not returns anything even after using return

// let arr2 = arr.map(
//     (elem , i , all) => {
//     console.log("map1 --->",elem, i, all) // .!!! 
//     console.log("map2 --->",`${elem} gotit`) // .!!!
//     console.log("condition map --->",elem) // returns value on conditoni
//     return elem
//     }
// )
// console.log("arr2 --->",arr2)  // retunrs an array with unidentifies inplace of values without using return with usign return it returns a complete array 

// let arr3 = arr.filter(
//     (elem , i , all) => { // elem .!!!
//     console.log("filter --->",elem, i, all) // true/false .!!!
//     // console.log(typeof 11)
//     if( typeof elem == "number" ){
//         // let store += elem 
//           console.log("condition filter --->",elem) // returns value on conditoni
//     }
//     return elem
// }
// )
// console.log("arr3 --->",arr3) // return an empty array without using return with usign return it returns a complete array 

// // 4.; find()
// let students = [{name:"abc",age:30},{name:"xyz",age:56},{name:"hij",age:20}]
// let arr4 = students.find(function(elem){
// return elem.age === 30 || elem.age > 20
// })
// console.log("result",arr4) // returns the first value which matches the condition .!!!

// // 5.; findIndex()
// let students = [{name:"abc",age:30},{name:"xyz",age:56},{name:"hij",age:20}]
// let arr4 = students.findIndex(function(elem){
// return elem.age === 30 || elem.age > 20
// })
// console.log("result",arr4) // returns the first value which matches the condition .!!!
