let count = 0,
  num = document.getElementById("number"),
  btn1 = document.getElementById("increment"),
  btn2 = document.getElementById("decrement");

let increment = () => {
  count += 1;
  num.innerHTML = count;
};
let decrement = () => {
  count -= 1;
  num.innerHTML = count;
};

btn1.addEventListener("click", increment);
btn2.addEventListener("click", decrement);
