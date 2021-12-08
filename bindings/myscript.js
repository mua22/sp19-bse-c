console.log("JS code Started...");
function changeColor() {
  console.log("inside change Color");
  var para = document.getElementById("myPara");
  if (para.classList.contains("orange")) {
    para.classList.remove("orange");
    para.classList.add("red");
  } else if (para.classList.contains("red")) {
    para.classList.remove("red");
    para.classList.add("orange");
  }
}

window.onload = doBindings;
function doBindings() {
  var btn = document.getElementById("myBtn");
  console.log(btn);
  btn.onclick = changeColor;
}

console.log("Finished Executing JS");
