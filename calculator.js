let y = document.querySelectorAll(".btn");
console.log(y);

let x=document.getElementById("screen");
let arr = Array.from(y);
console.log(arr);

arr.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.value == "AC") {
      x.value = " ";
    } else if (this.value == "DE") {
      let z = x.value.slice(0, -1);
      x.value = z;
    } else if (this.value == "=") {
      let w = eval(x.value);
      x.value = w;
    } else {
      x.value += this.value;
    }
  });
});