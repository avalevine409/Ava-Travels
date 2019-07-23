function changeButtonText() {
  var button = document.getElementById("myButton");
  button.innerHTML = "Learn more about the Netherlands";
  var x= document.getElementByID("My DIV");
  if (x.style.display == "block") {
    x.style.display == "none";
  } else {
    x.style.display = "block"
    button.innerHTML = "Learn less about the Netherlands"
  }
}
