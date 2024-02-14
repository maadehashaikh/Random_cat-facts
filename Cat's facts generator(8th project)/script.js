const URL = "https://meowfacts.herokuapp.com/";
let catFacts = document.querySelector(".catFacts");
let btn = document.querySelector(".btn");

const GetFacts = async() =>{
  console.log("Getting data ....")
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let strng = data.data.join("");
  console.log(strng);
  catFacts.innerText = strng;
}

btn.addEventListener("click",GetFacts);