let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input2").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = "";
      document.querySelector(".input1").value = string;
      document.querySelector(".input2").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".input1").value = string;
    }
  });
});
