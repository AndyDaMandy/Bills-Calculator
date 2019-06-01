/* This is a bills calc that you can add in a bill and say what it's for and it'll update the values to show how much the person owes per month. */

let myself = "";
let myBills = [];
var myTotal = 0;

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

}
function showMyBills(person, month){
  console.log("Here are your bills for " + month + "\n" + getProps(myBills) + ": \nTotal: $" + myTotal);
};       

function getProps(arr){
  let eachBill = []
  for (var i = 0; i < arr.length; i++ )
    {    eachBill.push((arr[i[bill]]));
    };
  let joined = eachBill.toString();
  return joined = joined.split(',').join(', ');
};
// Things to do:
// Build this to hold info into the console
// Create interaction with DOM for creating a list
