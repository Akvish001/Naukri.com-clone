// document.getElementsByClassName('work-status2')[0]
// .addEventListener('click', function (event) {
//     console.log('click Event Div');
//     myfn()
// });
function validateUserField(){
  var user = document.getElementById('user').value;

  if(user==" "){
    document.getElementById('name').innerHTML="Please fill the user field";
    return false;
  }
  if((user.length <3)||(user.length>30)){
    document.getElementById('name').innerHTML="User length must be b/w 3&30";
    return false;
  }
  document.getElementById('name').innerHTML="";
}


function validateEmidField(){

  var emid = document.getElementById('emid').value;

  if(emid==" "){
    document.getElementById('mail').innerHTML="Please fill the email field";
  return false;
}
if(emid.indexOf('@') <= 0) {
  document.getElementById('mail').innerHTML="@ Invalid Position";
  return false;
}
if((emid.charAt(emid.length-4)!='.') && (emid.charAt(emid.length-3)!='.')) {
  document.getElementById('mail').innerHTML="**. Invalid position";
  return false;
}


document.getElementById('mail').innerHTML="";

}


function validatePassField(){
  var pass = document.getElementById('pass').value;

  if(pass==" "){
    document.getElementById('password').innerHTML="Please fill the Password";
    return false;
  }
  if((pass.length<=6)||(pass.length>=30)){
    document.getElementById('password').innerHTML="Password must be b/w 6 & 30";
    return false;
  }
  document.getElementById('password').innerHTML="";
}


function validateMnoField(){
  var mno = document.getElementById('mno').value;

  if((mno.length !=10)) {
  document.getElementById('mobileno').innerHTML="Mobile number must be 10 digits only";
  return false;
}
if(isNaN(mno)){
  document.getElementById('mobileno').innerHTML="Only numbers are allowed";
  return false;
}

  document.getElementById('mobileno').innerHTML="";
}


function validatePlaceField() {
var place = document.getElementById("place");

if(place==" "){
    document.getElementById('city').innerHTML="Please fill the city field";
    return false;
  }
 
  document.getElementById('city').innerHTML="";
}



//    function myfn() {
//     console.log("Click Event");
//     var x = document.getElementById("cities");
//     console.log("Click Event 456");
//     if (x.style.display === "none") {
//          x.style.display = "block";
//       } 
//        else {
//          place.style.display = "none";
//         }
//   }
//    function myfnt() {
//     var y = document.getElementById("cty");
//     if (y.style.display === "none") {
//          y.style.display = "block";
//       } 
//        else {
//          place.style.display = "none";
//         }
//   }


function experienceButtonClick() {

}

function fresherButtonClick() {

}

// hide-part

function showDiv1() {
document.getElementById('welcomeDiv').style.display = "none";
}
function showDiv2() {
document.getElementById('welcomeDiv').style.display = "block";
}

function showDiv3() {
var y = document.getElementById("cctry");
if (y.style.display === "none") {
  y.style.display = "block";
} 
else if(y.style.display === "block") {
  y.style.display = "none";
 }
}

function showHam() {
document.getElementById('ham').style.display = "block";
}
function closeHam() {
document.getElementById('ham').style.display = "none";
}
// function hpage() {
//   document.getElementById('h-page').style.display = "block";
// }



function validation(){
  validateUserField()
  validateEmidField()
  validatePassField()
  validateMnoField()
  validatePlaceField()
  showDiv1()
  showDiv2()
  showDiv3()
  showHam()
  closeHam()
  // hpage()
  
}