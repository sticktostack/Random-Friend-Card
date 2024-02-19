// Containing all the data updateable fields
let text = document.querySelector("p");
let buttonNext = document.getElementById("btn");
let namE = document.getElementById("name");
let gender = document.getElementById("gender");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let image = document.getElementById("image");
let age = document.getElementById("age");

// Making the function to show the output
const run = function () {
  fetch("https://randomuser.me/api/")
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      gender.innerHTML = `Gender : ${res.results[0].gender}`;
      namE.innerText = `Name : ${res.results[0].name.first}`;
      phone.innerHTML = `Phone : ${res.results[0].phone}`;
      email.innerHTML = `Email : ${res.results[0].email}`;
      age.innerHTML = `Age : ${res.results[0].dob.age}`;
      buttonNext.innerHTML = "Next >";
      image.style.display = "block";
      image.src = res.results[0].picture.large;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("All Done");
    });
};
// displaying the output
buttonNext.addEventListener("click", run);
