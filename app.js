let displaybox = document.querySelector("#displaybox");
let result = document.querySelector("#result");
let agebtn = document.querySelector("#agebtn");
let calculatebtn = document.querySelector("#calculatebtn");
let resetbtn = document.querySelector("#resetbtn");
let refresh = document.querySelector(".refresh");


let mytimer;
let age;

calculatebtn.addEventListener("click", function(){
  age= agebtn.value.trim();

  if(age == ""){

    clearInterval(mytimer);
      let alert1 = document.querySelector(".alert1");
      alert1.classList.add('active');

      mytimer= setInterval(function(){

        alert1.classList.remove('active');
      },3000)
  } else if( isNaN(age) == true){

    clearInterval(mytimer);
    let alert2 = document.querySelector(".alert2");
    alert2.classList.add('active');

    mytimer= setInterval(function(){

      alert2.classList.remove('active');
    },3000)
  } else{
      let box = document.querySelector(".box");
      box.classList.add('active');

      let remaining_years = 90 - age;
      let remaining_weeks = remaining_years * 52;

      result.innerHTML = remaining_weeks;

  }

})

resetbtn.addEventListener("click", function(){
     refresh.click();

})

