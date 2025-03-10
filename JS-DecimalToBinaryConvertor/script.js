const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  let binary = "";
  result.innerText = binary;

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    input = Math.floor(input / 2);
    binary = (input % 2) + binary;
  }
};

/* 

  const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === "") {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    const quo = Math.floor(input / 2);
    const remain = input % 2;

    inputs.push(input);
    quotients.push(quo);
    remainders.push(remain);
    input = quo;
  }
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  result.innerText = remainders.reverse().join(""); 
}
  
  */

//--------------- RECURSSION FUNCTION
const countdown = (number) => {
  console.log(number);

  if (number === 0) {
    return;
  } else {
    countdown(number - 1);
  }
};
