document.getElementById("button0").addEventListener("click", myFunction0);

function myFunction0() {
  var thing00 = document.getElementById("user_input0").value;
  var thing01 = "telescope"

  if(thing00 === thing01)
  {
    document.getElementById("output0").innerHTML = "correct! you win";
  } 
  else if(thing00 != thing01)
  {
    document.getElementById("output0").innerHTML = "Incorrect, try again";
  }
}


document.getElementById("button1").addEventListener("click", myFunction1);

function myFunction1() {
  var thing02 = document.getElementById("user_input1").value;
  var thing03 = "astronaut"

  if(thing02 === thing03)
  {
    document.getElementById("output1").innerHTML = "correct! you win";
  } 
  else if(thing02 != thing03)
  {
    document.getElementById("output1").innerHTML = "Incorrect, try again";
  }
}

document.getElementById("button2").addEventListener("click", myFunction2);

function myFunction2() {
  var thing04 = document.getElementById("user_input2").value;
  var thing05 = "alien"

  if(thing04 === thing05)
  {
    document.getElementById("output2").innerHTML = "correct! you win";
  } 
  else if(thing06 != thing07)
  {
    document.getElementById("output2").innerHTML = "Incorrect, try again";
  }
}

document.getElementById("button3").addEventListener("click", myFunction3);

function myFunction3() {
  var thing06 = document.getElementById("user_input3").value;
  var thing07 = "saturn"

  if(thing06 === thing07)
  {
    document.getElementById("output3").innerHTML = "correct! you win";
  } 
  else if(thing06 != thing07)
  {
    document.getElementById("output3").innerHTML = "Incorrect, try again";
  }
}

document.getElementById("button4").addEventListener("click", myFunction4);

function myFunction4() {
  var thing08 = document.getElementById("user_input4").value;
  var thing09 = "rocket ship"

  if(thing08 === thing09)
  {
    document.getElementById("output4").innerHTML = "correct! you win";
  } 
  else if(thing08 != thing09)
  {
    document.getElementById("output4").innerHTML = "Incorrect, try again";
  }
}
