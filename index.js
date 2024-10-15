const btn = document.getElementById("btn");
const body = document.querySelector("body");


body.addEventListener("keydown", function (e) {
  if (e.key === "a" && e.ctrlKey === true) {
    showSearch();
  }
});


function showSearch() {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search";
  input.id = "search";
  body.appendChild(input);
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
  input.style.width = "50%";
  input.style.height = "30px";
  input.style.margin = "10px";
  input.style.borderRadius = "5px";
  input.style.padding = "5px";
  input.style.backgroundColor = "lightgray";
}

// body.addEventListener("keydown", function (e) {
//   console.log(e);
//   if (e.key === "a"&& e.ctrlKey === true) {
//     alert(`heyyyyyyy`);
//   }
// });

// //adding adding eventlistener to the button
// btn.addEventListener("keydown", function (e) {
//   alert(`key  value is: ${e.key}`);
// });
// //btn.onclick= function(){}
// btn.oncclick = alertMessage;
// //function to alert message
// function alertMessage() {
//   alert("Hello World");
// }
