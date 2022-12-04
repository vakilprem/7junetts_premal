let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input2").value = string;
    } else if (e.target.innerHTML == "DEL") {
      var back = function () {
        var abc = document.getElementById("xyz").value;
        document.getElementById("xyz").value = abc.substring(0, abc.length - 1);
      };
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector(".input1").value = string;
    }
  });
});

// // function back() {
//   var value = document.getElementById("xyz").value;
//   document.getElementById("xyz").value = value.substr(0, value.length - 1);
// }
