/* This is a bills calc that you can add in a bill and say what it's for and it'll update the values to show how much the person owes per month. */

let myself = "";
let myBills = [];
var myTotal = 0;
// Here's a way to possibly edit this...
//What if I created a function that'd update my global variables, taking them as parameters?

let girlfriend = "";
let girlfriendBills = [];
let herTotal = 0;

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];

function namingMe(x){
  if (typeof x !== "string")
    {
      console.log("Invalid, please try again")
    }
  else {
  myself = x;
  };
};

function addMyBills(bill, amount){
  myBills.push({bill: bill, amount: amount});
};
//Totaling doesn't work yet...
function totaling(all){
let sum = 0;
let eachTotal = [];
let finalArray = []
  for (var c = 0; c < all.length; c++ )
    {    eachTotal.push(Object.values(all[c]));
    };
  for (var w = 0; w < eachTotal.length; w++){
    finalArray.push(eachTotal[w][1]);
  };
  for (var y = 0; y < finalArray.length; y++){
    sum += finalArray[y];
  };
  myTotal = sum;
  return sum;
};

function showMyBills(person, month){
  console.log("Here are your bills for " + month + "\n" + getProps(myBills) + ": \nTotal: $" + totaling(myBills));
};       

function getProps(arr){
    let eachBill = [];
    let finalArray = []
  //This creates an array in an array. If I can then pull data from this, I can return the properties easily.
  for (var i = 0; i < arr.length; i++ )
    {    eachBill.push(Object.values(arr[i]));
    };
  for (var b = 0; b < eachBill.length; b++){
    finalArray.push(eachBill[b][0]);
  };
  let joined = finalArray.toString();
  return joined = joined.split(',').join(', ');
};
// Things to do:
// Build this to hold info into the console
// Create interaction with DOM for creating a list
