let api = "https://randomuser.me/api";
let userName = document.querySelector("#userName");
let userGender = document.querySelector("#userGender");
let userAge = document.querySelector("#userAge");
let userPhone = document.querySelector("#userPhone");
let userProfilePic = document.querySelector("#userProfilePic");

function btn() {
  fetch(api)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let user = data.results[0];
      let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
      let gender = user.gender;
      let age = user.dob.age;
      let phone = user.phone;
      let profilePic = user.picture.large;
      userName.innerText = `${"Name: " + name}`;
      userGender.innerText = `${"Gender: " + gender}`;
      userAge.innerText = `${"Age: " + age}`;
      userPhone.innerText = `${"Phone: " + phone}`;
      userProfilePic.src = profilePic;
      console.log(name);
      console.log(age);
      console.log(phone);
    });
}
