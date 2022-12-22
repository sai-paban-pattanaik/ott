function myFunction1() {
  let a = document.getElementById("a1").value;
  console.log(a)
  var b = 50;
  let c = a * b;
  console.log(c)
  document.getElementById("output1").innerHTML = c;
}
function myFunction2() {
  let a = document.getElementById("a2").value;
  console.log(a)
  var b = 70;
  let c = a * b;
  console.log(c)
  document.getElementById("output2").innerHTML = c;
}
const sa= document.getElementById("bt2");
sa.addEventListener('click', function onClick() {
  sa.style.backgroundColor = "plum";
  sa.style.color = "white";
});